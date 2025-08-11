import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  loginUser,
  registerUser,
  logoutUser,
  verifyToken,
  clearError,
  type LoginRequest,
  type RegisterRequest,
} from '../slice';
import {
  selectAuth,
  selectUser,
  selectIsAuthenticated,
  selectAuthLoading,
  selectAuthError,
} from '../selectors';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectAuth);
  const user = useAppSelector(selectUser);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const isLoading = useAppSelector(selectAuthLoading);
  const error = useAppSelector(selectAuthError);

  const login = async (credentials: LoginRequest) => {
    return dispatch(loginUser(credentials));
  };

  const register = async (userData: RegisterRequest) => {
    return dispatch(registerUser(userData));
  };

  const logout = async () => {
    return dispatch(logoutUser());
  };

  const checkAuth = async () => {
    return dispatch(verifyToken());
  };

  const resetError = () => {
    dispatch(clearError());
  };

  return {
    // State
    user,
    isAuthenticated,
    isLoading,
    error,
    auth,
    
    // Actions
    login,
    register,
    logout,
    checkAuth,
    resetError,
  };
};
