// eslint-disable-next-line @typescript-eslint/no-explicit-any
const env = (import.meta as any).env || {};

export const API_BASE_URL = env.VITE_API_URL || '/api';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: '/profile',
  CART: '/cart',
} as const;

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER: 'user',
  THEME: 'theme',
} as const;
