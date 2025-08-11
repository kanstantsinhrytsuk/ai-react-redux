import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  Paper,
  Link,
  CircularProgress,
} from '@mui/material';
import { useAuth } from '../hooks/useAuth';
import { LoginSchema, type LoginRequest } from '../slice';

interface LoginFormProps {
  onSuccess?: () => void;
  onSwitchToRegister?: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSuccess,
  onSwitchToRegister,
}) => {
  const { login, isLoading, error } = useAuth();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data: LoginRequest) => {
    try {
      const result = await login(data);
      if (result.type === 'auth/login/fulfilled') {
        onSuccess?.();
      }
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <Paper className="w-full max-w-md mx-auto p-8" elevation={0}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Box className="text-center mb-6">
          <Typography variant="h4" component="h2" className="font-bold mb-2">
            Sign in
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Or{' '}
            <Link
              component="button"
              type="button"
              onClick={onSwitchToRegister}
              className="font-medium"
            >
              create a new account
            </Link>
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" className="mb-6">
            {error}
          </Alert>
        )}

        <Box className="space-y-4 mb-6">
          <TextField
            {...register('email')}
            id="email"
            type="email"
            label="Email address"
            autoComplete="email"
            placeholder="Enter your email"
            error={!!errors.email}
            helperText={errors.email?.message}
            required
            fullWidth
            variant="outlined"
          />

          <TextField
            {...register('password')}
            id="password"
            type="password"
            label="Password"
            autoComplete="current-password"
            placeholder="Enter your password"
            error={!!errors.password}
            helperText={errors.password?.message}
            required
            fullWidth
            variant="outlined"
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={isLoading}
          fullWidth
          className="mb-4"
          startIcon={isLoading ? <CircularProgress size={20} /> : undefined}
        >
          {isLoading ? 'Signing in...' : 'Sign in'}
        </Button>

        <Box className="text-center">
          <Typography variant="body2" color="text.secondary">
            Demo: admin@example.com / password
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};
