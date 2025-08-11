import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Alert,
  Link,
  CircularProgress,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  StyledRegistrationContainer,
  StyledRegistrationCard,
  StyledFormHeader,
  StyledFormTitle,
  StyledFormSubtitle,
  StyledButton,
  StyledFooterSection,
  StyledFooterText,
} from '../../../components/ui/styled';
import { InputField } from '../../../components/ui';
import { useAuth } from '../hooks/useAuth';
import { ForgotPasswordSchema, type ForgotPasswordRequest } from '../slice';

interface ForgotPasswordFormProps {
  onBackToLogin?: () => void;
}

export const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
  onBackToLogin,
}) => {
  const { sendPasswordReset, isLoading, error } = useAuth();
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordRequest>({
    resolver: zodResolver(ForgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordRequest) => {
    try {
      const result = await sendPasswordReset(data);
      if (result.type === 'auth/forgotPassword/fulfilled') {
        setIsSuccess(true);
      }
    } catch (err) {
      console.error('Password reset failed:', err);
    }
  };

  const handleBackToLogin = () => {
    if (onBackToLogin) {
      onBackToLogin();
    } else {
      navigate('/auth');
    }
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
          px: 2,
          py: 4,
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 400 }}>
          {/* Header Section */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <StyledFormTitle
              sx={{
                fontSize: '32px !important',
                '@media (max-width: 768px)': {
                  fontSize: '32px !important',
                },
              }}
            >
              Forgotten your password?
            </StyledFormTitle>
            <StyledFormSubtitle
              sx={{
                fontSize: '16px !important',
                mt: 1,
                '@media (max-width: 768px)': {
                  fontSize: '16px !important',
                },
              }}
            >
              There is nothing to worry about, we&apos;ll send you a message to 
              help you reset your password.
            </StyledFormSubtitle>
          </Box>

          {/* Success Message */}
          {isSuccess && (
            <Alert severity="success" sx={{ mb: 3 }}>
              Password reset link has been sent to your email address.
            </Alert>
          )}

          {/* Error Alert */}
          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          {!isSuccess && (
            <>
              {/* Form */}
              <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ mb: 3 }}>
                  <InputField
                    {...register('email')}
                    type="email"
                    label="Email Address"
                    placeholder="Enter personal or work email address"
                    autoComplete="email"
                    error={errors.email?.message}
                  />
                </Box>

                {/* Submit Button */}
                <StyledButton
                  type="submit"
                  disabled={isLoading}
                  customVariant="filled"
                  customSize="medium"
                  fullWidth
                  startIcon={
                    isLoading ? <CircularProgress size={20} /> : undefined
                  }
                >
                  {isLoading ? 'Sending...' : 'Send Reset Link'}
                </StyledButton>
              </Box>
            </>
          )}

          {/* Footer */}
          <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid #dde1e6' }}>
            <StyledFooterText>
              Remember your password?{' '}
              <Link
                component="button"
                type="button"
                onClick={handleBackToLogin}
                sx={{
                  fontWeight: 500,
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'none',
                  },
                }}
              >
                Back to Login
              </Link>
            </StyledFooterText>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <StyledRegistrationContainer>
      <StyledRegistrationCard>
        {/* Header Section */}
        <StyledFormHeader>
          <StyledFormTitle>Forgotten your password?</StyledFormTitle>
          <StyledFormSubtitle>
            There is nothing to worry about, we&apos;ll send you a message 
            to help you reset your password.
          </StyledFormSubtitle>
        </StyledFormHeader>

        {/* Success Message */}
        {isSuccess && (
          <Alert severity="success" sx={{ mb: 3 }}>
            Password reset link has been sent to your email address.
          </Alert>
        )}

        {/* Error Alert */}
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {!isSuccess && (
          <>
            {/* Form */}
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ mb: 3, pt: 3 }}>
                <InputField
                  {...register('email')}
                  type="email"
                  label="Email Address"
                  placeholder="Enter personal or work email address"
                  autoComplete="email"
                  error={errors.email?.message}
                />
              </Box>

              {/* Submit Button */}
              <StyledButton
                type="submit"
                disabled={isLoading}
                customVariant="filled"
                customSize="medium"
                fullWidth
                startIcon={
                  isLoading ? <CircularProgress size={20} /> : undefined
                }
              >
                {isLoading ? 'Sending...' : 'Send Reset Link'}
              </StyledButton>
            </Box>
          </>
        )}

        {/* Footer */}
        <StyledFooterSection>
          <StyledFooterText>
            Remember your password?{' '}
            <Link
              component="button"
              type="button"
              onClick={handleBackToLogin}
              sx={{
                fontWeight: 500,
                textDecoration: 'underline',
                cursor: 'pointer',
                '&:hover': {
                  textDecoration: 'none',
                },
              }}
            >
              Back to Login
            </Link>
          </StyledFooterText>
        </StyledFooterSection>
      </StyledRegistrationCard>
    </StyledRegistrationContainer>
  );
};
