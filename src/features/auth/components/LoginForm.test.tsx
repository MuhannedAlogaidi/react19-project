import '@testing-library/jest-dom';
import { describe, it, expect, beforeAll, afterAll, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { LoginForm } from '@/features/auth/components/LoginForm';
import { AuthProvider } from '@/features/auth/context/AuthContext';
import { server } from '@/../tests/mocks/server'; // ← Changed this line

// Setup MSW
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const renderLoginForm = () => {
  return render(
    <BrowserRouter>
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    </BrowserRouter>
  );
};

describe('LoginForm', () => {
  it('renders login form', () => {
    renderLoginForm();

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('handles successful login', async () => {
    const user = userEvent.setup();
    renderLoginForm();

    await user.type(screen.getByTestId('email-input'), 'test@example.com');
    await user.type(screen.getByTestId('password-input'), 'password123');
    await user.click(screen.getByTestId('login-button'));

    await waitFor(() => {
      expect(
        screen.queryByText(/invalid credentials/i)
      ).not.toBeInTheDocument();
    });
  });

  it('displays error on failed login', async () => {
    const user = userEvent.setup();
    renderLoginForm();

    await user.type(screen.getByTestId('email-input'), 'wrong@example.com');
    await user.type(screen.getByTestId('password-input'), 'wrongpassword');
    await user.click(screen.getByTestId('login-button'));

    await waitFor(() => {
      expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument();
    });
  });

  it('disables submit button during login', async () => {
    const user = userEvent.setup();
    renderLoginForm();

    await user.type(screen.getByTestId('email-input'), 'test@example.com');
    await user.type(screen.getByTestId('password-input'), 'password123');

    const submitButton = screen.getByTestId('login-button');

    // Submit form
    const submitPromise = user.click(submitButton);

    // Button should be disabled immediately after click
    await waitFor(() => {
      expect(submitButton).toBeDisabled();
    });

    // Wait for submission to complete
    await submitPromise;
  });
});
