import { create } from 'zustand';
import { User } from '@/types';
import { STORAGE_KEYS } from '@/utils/constants';

interface UserState {
  user: User | null;
  token: string | null;
  setUser: (user: User, token: string) => void;
  clearUser: () => void;
  isAuthenticated: () => boolean;
}

const getStoredToken = () => {
  try {
    return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  } catch {
    return null;
  }
};

export const useUserStore = create<UserState>((set, get) => ({
  user: null,
  token: getStoredToken(),

  setUser: (user, token) => {
    try {
      localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    } catch (error) {
      console.error('Failed to store user data:', error);
    }
    set({ user, token });
  },

  clearUser: () => {
    try {
      localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
      localStorage.removeItem(STORAGE_KEYS.USER);
    } catch (error) {
      console.error('Failed to clear user data:', error);
    }
    set({ user: null, token: null });
  },

  isAuthenticated: () => {
    return !!get().token;
  },
}));
