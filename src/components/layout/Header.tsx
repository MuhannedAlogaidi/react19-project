import { Link } from 'react-router-dom';
import { useUserStore } from '@/store/useUserStore';
import { useThemeStore } from '@/store/useThemeStore';
import { Button } from '@/components/ui/Button';
import { ROUTES } from '@/utils/constants';

export function Header() {
  const { user, clearUser, isAuthenticated } = useUserStore();
  const { theme, toggleTheme } = useThemeStore();

  const handleLogout = () => {
    clearUser();
  };

  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to={ROUTES.HOME} className="text-2xl font-bold text-primary-600">
          React 19 App
        </Link>

        <nav className="flex items-center gap-4">
          <Link
            to={ROUTES.CART}
            className="text-gray-700 hover:text-primary-600"
          >
            Cart
          </Link>

          <Button
            variant="outline"
            size="sm"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </Button>

          {isAuthenticated() ? (
            <>
              <span className="text-gray-700">Hello, {user?.name}</span>
              <Button variant="secondary" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <Link to={ROUTES.LOGIN}>
              <Button size="sm">Login</Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
