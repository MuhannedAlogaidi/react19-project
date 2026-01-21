import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import LoginPage from '@/features/auth';
import CartPage from '@/features/shopping-cart';
import { ROUTES } from '@/utils/constants';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <App />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTES.CART,
        element: <CartPage />,
      },
    ],
  },
]);
