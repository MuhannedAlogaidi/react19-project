import { API_BASE_URL, STORAGE_KEYS } from '@/utils/constants';

interface FetchConfig {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
}

class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options?: FetchConfig
  ): Promise<T> {
    const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...(options?.headers || {}),
    };

    const config: FetchConfig = {
      method: options?.method || 'GET',
      headers,
      ...(options?.body && { body: options.body }),
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response = await fetch(`${this.baseURL}${endpoint}`, config as any);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'An error occurred');
    }

    return response.json();
  }

  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  async post<T>(endpoint: string, data?: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async put<T>(endpoint: string, data?: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }
}

export const apiClient = new ApiClient(API_BASE_URL);
