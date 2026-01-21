import { apiClient } from '@/lib/api';
import { AuthResponse } from '@/types';
import { LoginCredentials, RegisterData } from './types';

export const authApi = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    return apiClient.post<AuthResponse>('/auth/login', credentials);
  },

  register: async (data: RegisterData): Promise<AuthResponse> => {
    return apiClient.post<AuthResponse>('/auth/register', data);
  },

  logout: async (): Promise<void> => {
    return apiClient.post<void>('/auth/logout');
  },
};
