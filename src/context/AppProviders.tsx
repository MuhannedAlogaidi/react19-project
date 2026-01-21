import { ReactNode } from 'react';

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  // Add global context providers here
  // Example: <ThemeProvider><AuthProvider>{children}</AuthProvider></ThemeProvider>
  return <>{children}</>;
}
