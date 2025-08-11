import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { z } from 'zod';

// Validation schemas
export const LoginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const RegisterSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
  name: z.string().min(2, 'Name must be at least 2 characters'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export type LoginRequest = z.infer<typeof LoginSchema>;
export type RegisterRequest = z.infer<typeof RegisterSchema>;

// Types
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

// Initial state
const getInitialAuthState = (): AuthState => {
  const token = localStorage.getItem('auth-token');
  return {
    user: null,
    token,
    isLoading: !!token, // If token exists, we're loading to verify it
    error: null,
    isAuthenticated: false,
  };
};

const initialState: AuthState = getInitialAuthState();

// Async thunks
export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials: LoginRequest, { rejectWithValue }) => {
    try {
      // Mock API call - replace with real API
      const response = await new Promise<{
        user: User;
        token: string;
      }>((resolve, reject) => {
        setTimeout(() => {
          if (
            credentials.email === 'admin@example.com' &&
            credentials.password === 'password'
          ) {
            resolve({
              user: {
                id: '1',
                email: credentials.email,
                name: 'Admin User',
                role: 'admin',
                createdAt: new Date().toISOString(),
              },
              token: 'mock-jwt-token',
            });
          } else {
            reject(new Error('Invalid credentials'));
          }
        }, 1000);
      });
      
      localStorage.setItem('auth-token', response.token);
      return response;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData: RegisterRequest, { rejectWithValue }) => {
    try {
      // Mock API call - replace with real API
      const response = await new Promise<{
        user: User;
        token: string;
      }>((resolve) => {
        setTimeout(() => {
          resolve({
            user: {
              id: Date.now().toString(),
              email: userData.email,
              name: userData.name,
              role: 'user',
              createdAt: new Date().toISOString(),
            },
            token: 'mock-jwt-token',
          });
        }, 1000);
      });
      
      localStorage.setItem('auth-token', response.token);
      return response;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem('auth-token');
      // Mock API call to invalidate token on server
      await new Promise((resolve) => setTimeout(resolve, 500));
      return;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const verifyToken = createAsyncThunk(
  'auth/verifyToken',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('auth-token');
      if (!token) {
        return rejectWithValue('No token found');
      }
      
      // Mock API call to verify token - replace with real API
      const response = await new Promise<User>((resolve, reject) => {
        setTimeout(() => {
          if (token === 'mock-jwt-token') {
            resolve({
              id: '1',
              email: 'admin@example.com',
              name: 'Admin User',
              role: 'admin',
              createdAt: new Date().toISOString(),
            });
          } else {
            reject(new Error('Invalid token'));
          }
        }, 500);
      });
      
      return { user: response, token };
    } catch (error) {
      localStorage.removeItem('auth-token');
      return rejectWithValue((error as Error).message);
    }
  }
);

// Auth slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        state.isAuthenticated = false;
      })
      // Register
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        state.isAuthenticated = false;
      })
      // Logout
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Verify token
      .addCase(verifyToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(verifyToken.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError, setCredentials } = authSlice.actions;
