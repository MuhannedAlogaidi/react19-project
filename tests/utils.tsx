/* eslint-disable react-refresh/only-export-components */
import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AppProviders } from '@/context/AppProviders';

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  route?: string;
}

export function renderWithProviders(
  ui: ReactElement,
  { route = '/', ...options }: CustomRenderOptions = {}
) {
  window.history.pushState({}, 'Test page', route);

  function Wrapper({ children }: { children: ReactElement }) {
    return (
      <BrowserRouter>
        <AppProviders>{children}</AppProviders>
      </BrowserRouter>
    );
  }

  return render(ui, { wrapper: Wrapper, ...options });
}

export const waitFor = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export { renderWithProviders as render };
export * from '@testing-library/react';
