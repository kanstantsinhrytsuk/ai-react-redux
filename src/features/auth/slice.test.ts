import { describe, it, expect } from 'vitest';
import { authSlice, clearError, setCredentials } from './slice';
import type { AuthState, User } from './slice';

describe('authSlice', () => {
  const initialState: AuthState = {
    user: null,
    token: null,
    isLoading: false,
    error: null,
    isAuthenticated: false,
  };

  const mockUser: User = {
    id: '1',
    email: 'test@example.com',
    name: 'Test User',
    role: 'user',
    createdAt: '2024-01-01T00:00:00.000Z',
  };

  it('should return the initial state', () => {
    expect(authSlice.reducer(undefined, { type: 'unknown' })).toEqual({
      user: null,
      token: null,
      isLoading: false,
      error: null,
      isAuthenticated: false,
    });
  });

  it('should handle clearError', () => {
    const previousState: AuthState = {
      ...initialState,
      error: 'Some error',
    };
    
    expect(authSlice.reducer(previousState, clearError())).toEqual({
      ...previousState,
      error: null,
    });
  });

  it('should handle setCredentials', () => {
    const credentials = { user: mockUser, token: 'test-token' };
    
    expect(authSlice.reducer(initialState, setCredentials(credentials)))
      .toEqual({
        ...initialState,
        user: mockUser,
        token: 'test-token',
        isAuthenticated: true,
        error: null,
      });
  });
});
