import type { RootState } from '../../app/store';
import type { AuthState } from './slice';

// Selectors
export const selectAuth = (state: RootState): AuthState => 
  state.auth as AuthState;
export const selectUser = (state: RootState) => 
  (state.auth as AuthState).user;
export const selectIsAuthenticated = (state: RootState) => 
  (state.auth as AuthState).isAuthenticated;
export const selectAuthLoading = (state: RootState) => 
  (state.auth as AuthState).isLoading;
export const selectAuthError = (state: RootState) => 
  (state.auth as AuthState).error;
