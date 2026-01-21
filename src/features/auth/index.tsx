import { AuthProvider } from './context/AuthContext';
import { LoginForm } from './components/LoginForm';

export default function LoginPage() {
  return (
    <AuthProvider>
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <LoginForm />
      </div>
    </AuthProvider>
  );
}
