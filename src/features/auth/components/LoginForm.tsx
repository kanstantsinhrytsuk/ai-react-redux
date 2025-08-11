import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Paper, 
  Typography, 
  Stack,
  Link,
  Alert,
  useTheme,
  useMediaQuery 
} from '@mui/material';
import { useAuth } from '../hooks/useAuth';
import { LoginSchema, type LoginRequest } from '../slice';
import { 
  InputField, 
  Checkbox, 
  Button,
} from '../../../components/ui';
import {
  StyledSocialSection,
  StyledSocialText,
  StyledSocialButtonsDesktop,
  StyledSocialButton,
} from '../../../components/ui/styled';

interface LoginFormProps {
  onSuccess?: () => void;
  onSwitchToRegister?: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSuccess,
  onSwitchToRegister,
}) => {
  const { login, isLoading, error } = useAuth();
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
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

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  const handleSocialLogin = (provider: string) => {
    // TODO: Implement social login functionality
    alert(`Login with ${provider} - not implemented yet`);
  };

  if (isMobile) {
    return (
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          backgroundColor: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 400 }}>
          <Stack spacing={4}>
            {/* Header */}
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: '32px',
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: 700,
                  color: '#21272a',
                  lineHeight: 1.1,
                  mb: 1,
                }}
              >
                Welcome Back
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '16px',
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: 400,
                  color: '#21272a',
                  lineHeight: 1.4,
                }}
              >
                Please log in to continue
              </Typography>
            </Box>

            {/* Form */}
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={2}>
                <InputField
                  {...register('email')}
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email"
                  error={errors.email?.message}
                  autoComplete="email"
                  required
                />

                <InputField
                  {...register('password')}
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  error={errors.password?.message}
                  helperText="It must be a combination of minimum 8 letters, 
                             numbers, and symbols."
                  autoComplete="current-password"
                  required
                />

                {/* Remember me & Forgot password */}
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between' 
                  }}
                >
                  <Checkbox
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    label="Remember me"
                  />
                  <Link
                    component="button"
                    type="button"
                    onClick={handleForgotPassword}
                    sx={{
                      fontSize: '14px',
                      fontFamily: 'Roboto, sans-serif',
                      fontWeight: 400,
                      color: '#001d6c',
                      lineHeight: 1.4,
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    Forgot Password?
                  </Link>
                </Box>

                {error && (
                  <Alert severity="error">
                    {error}
                  </Alert>
                )}

                <Button
                  type="submit"
                  variant="filled"
                  size="medium"
                  className="w-full"
                  isLoading={isLoading}
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing in...' : 'Log In'}
                </Button>
              </Stack>
            </Box>

            {/* Social Login */}
            <StyledSocialSection>
              <StyledSocialText>Or log in with:</StyledSocialText>
              
              {/* Mobile: Vertical layout */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <StyledSocialButton 
                  isFullWidth 
                  onClick={() => handleSocialLogin('Google')}
                >
                  Google
                </StyledSocialButton>
                <StyledSocialButton 
                  isFullWidth 
                  onClick={() => handleSocialLogin('Apple')}
                >
                  Apple
                </StyledSocialButton>
                <StyledSocialButton 
                  isFullWidth 
                  onClick={() => handleSocialLogin('Twitter')}
                >
                  Twitter
                </StyledSocialButton>
              </Box>
            </StyledSocialSection>

            {/* Sign up link */}
            <Box sx={{ borderTop: '1px solid #dde1e6', pt: 2 }}>
              <Link
                component="button"
                type="button"
                onClick={onSwitchToRegister}
                sx={{
                  fontSize: '14px',
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: 400,
                  color: '#001d6c',
                  lineHeight: 1.4,
                  textDecoration: 'none',
                  display: 'block',
                  textAlign: 'center',
                  width: '100%',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                No account yet? Sign Up
              </Link>
            </Box>
          </Stack>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#f2f4f8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 2, md: 0 },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          backgroundColor: '#ffffff',
          border: '1px solid #dde1e6',
          borderRadius: 0,
          width: 680,
          p: 10,
        }}
      >
        <Stack spacing={3} alignItems="center">
          {/* Header */}
          <Box sx={{ textAlign: 'center', width: '100%' }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: '42px',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 700,
                color: '#21272a',
                lineHeight: 1.1,
                mb: 1,
              }}
            >
              Welcome Back
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '18px',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 400,
                color: '#21272a',
                lineHeight: 1.4,
              }}
            >
              Please log in to continue
            </Typography>
          </Box>

          {/* Form */}
          <Box 
            component="form" 
            onSubmit={handleSubmit(onSubmit)} 
            sx={{ width: '100%', pt: 3 }}
          >
            <Stack spacing={2}>
              <InputField
                {...register('email')}
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                error={errors.email?.message}
                autoComplete="email"
                required
              />

              <InputField
                {...register('password')}
                label="Password"
                type="password"
                placeholder="Enter your password"
                error={errors.password?.message}
                helperText="It must be a combination of minimum 8 letters, 
                           numbers, and symbols."
                autoComplete="current-password"
                required
              />

              {/* Remember me & Forgot password */}
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  width: '100%' 
                }}
              >
                <Checkbox
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  label="Remember me"
                />
                <Link
                  component="button"
                  type="button"
                  onClick={handleForgotPassword}
                  sx={{
                    fontSize: '14px',
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 400,
                    color: '#001d6c',
                    lineHeight: 1.4,
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Forgot Password?
                </Link>
              </Box>

              {error && (
                <Alert severity="error">
                  {error}
                </Alert>
              )}

              <Button
                type="submit"
                variant="filled"
                size="medium"
                className="w-full"
                isLoading={isLoading}
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Log In'}
              </Button>
            </Stack>
          </Box>

          {/* Social Login */}
          <StyledSocialSection>
            <StyledSocialText>Or log in with:</StyledSocialText>
            
            {/* Desktop: Horizontal layout */}
            <StyledSocialButtonsDesktop>
              <StyledSocialButton onClick={() => handleSocialLogin('Google')}>
                Google
              </StyledSocialButton>
              <StyledSocialButton onClick={() => handleSocialLogin('Apple')}>
                Apple
              </StyledSocialButton>
              <StyledSocialButton onClick={() => handleSocialLogin('Twitter')}>
                Twitter
              </StyledSocialButton>
            </StyledSocialButtonsDesktop>
          </StyledSocialSection>

          {/* Sign up link */}
          <Box sx={{ borderTop: '1px solid #dde1e6', pt: 2, width: '100%' }}>
            <Link
              component="button"
              type="button"
              onClick={onSwitchToRegister}
              sx={{
                fontSize: '14px',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 400,
                color: '#001d6c',
                lineHeight: 1.4,
                textDecoration: 'none',
                display: 'block',
                textAlign: 'center',
                width: '100%',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              No account yet? Sign Up
            </Link>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};
