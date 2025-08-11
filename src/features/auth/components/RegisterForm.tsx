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
import { RegisterSchema, type RegisterRequest } from '../slice';

interface RegisterFormProps {
  onSuccess?: () => void;
  onSwitchToLogin?: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onSuccess,
  onSwitchToLogin,
}) => {
  const { register: registerUser, isLoading, error } = useAuth();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterRequest>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = async (data: RegisterRequest) => {
    try {
      const result = await registerUser(data);
      if (result.type === 'auth/register/fulfilled') {
        onSuccess?.();
      }
    } catch (err) {
      console.error('Registration failed:', err);
    }
  };

  return (
    <Paper className="w-full max-w-md mx-auto p-8" elevation={0}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Box className="text-center mb-6">
          <Typography variant="h4" component="h2" className="font-bold mb-2">
            Create your account
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Or{' '}
            <Link
              component="button"
              type="button"
              onClick={onSwitchToLogin}
              className="font-medium"
            >
              sign in to your existing account
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
            {...register('name')}
            id="name"
            type="text"
            label="Full name"
            autoComplete="name"
            placeholder="Enter your full name"
            error={!!errors.name}
            helperText={errors.name?.message}
            required
            fullWidth
            variant="outlined"
          />

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
            autoComplete="new-password"
            placeholder="Enter your password"
            error={!!errors.password}
            helperText={errors.password?.message}
            required
            fullWidth
            variant="outlined"
          />

          <TextField
            {...register('confirmPassword')}
            id="confirmPassword"
            type="password"
            label="Confirm password"
            autoComplete="new-password"
            placeholder="Confirm your password"
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
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
          startIcon={isLoading ? <CircularProgress size={20} /> : undefined}
        >
          {isLoading ? 'Creating account...' : 'Create account'}
        </Button>
      </Box>
    </Paper>
  );
};
