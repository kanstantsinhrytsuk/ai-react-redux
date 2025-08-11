import { apiClient } from './api';
import type { User } from '../types';
import type { LoginRequest, RegisterRequest } from '../features/auth/slice';

export interface AuthResponse {
  user: User;
  token: string;
}

export interface AuthService {
  login(credentials: LoginRequest): Promise<AuthResponse>;
  register(userData: RegisterRequest): Promise<AuthResponse>;
  logout(): Promise<void>;
  verifyToken(): Promise<User>;
  refreshToken(): Promise<AuthResponse>;
}

class AuthServiceImpl implements AuthService {
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    return apiClient.post<AuthResponse>('/auth/login', credentials);
  }

  async register(userData: RegisterRequest): Promise<AuthResponse> {
    return apiClient.post<AuthResponse>('/auth/register', userData);
  }

  async logout(): Promise<void> {
    return apiClient.post<void>('/auth/logout');
  }

  async verifyToken(): Promise<User> {
    return apiClient.get<User>('/auth/verify');
  }

  async refreshToken(): Promise<AuthResponse> {
    return apiClient.post<AuthResponse>('/auth/refresh');
  }
}

export const authService = new AuthServiceImpl();
