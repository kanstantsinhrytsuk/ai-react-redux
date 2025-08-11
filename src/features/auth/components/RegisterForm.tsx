import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  Alert,
  Link,
  CircularProgress,
} from '@mui/material';
import {
  StyledRegistrationContainer,
  StyledRegistrationCard,
  StyledFormHeader,
  StyledFormTitle,
  StyledFormSubtitle,
  StyledFieldsRow,
  StyledSocialSection,
  StyledSocialText,
  StyledSocialButtonsDesktop,
  StyledSocialButtonsMobile,
  StyledFooterSection,
  StyledFooterText,
  StyledButton,
  StyledSocialButton,
} from '../../../components/ui/styled';
import { InputField, Checkbox } from '../../../components/ui';
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
  const [acceptTerms, setAcceptTerms] = useState(false);
  
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
    <StyledRegistrationContainer>
      <StyledRegistrationCard>
        {/* Header Section */}
        <StyledFormHeader>
          <StyledFormTitle>Sign Up Free</StyledFormTitle>
          <StyledFormSubtitle>
            14 day free access to unlimited resources
          </StyledFormSubtitle>
        </StyledFormHeader>

        {/* Error Alert */}
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {/* Registration Form */}
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {/* Name Fields Row */}
            <StyledFieldsRow>
              <Box sx={{ flex: 1 }}>
                <InputField
                  {...register('firstName')}
                  label="First Name"
                  placeholder="Placeholder"
                  error={errors.firstName?.message}
                />
              </Box>
              
              <Box sx={{ flex: 1 }}>
                <InputField
                  {...register('lastName')}
                  label="Last Name"
                  placeholder="Placeholder"
                  error={errors.lastName?.message}
                />
              </Box>
            </StyledFieldsRow>

            {/* Email Field */}
            <InputField
              {...register('email')}
              type="email"
              label="Email"
              placeholder="Placeholder"
              autoComplete="email"
              error={errors.email?.message}
            />

            {/* Password Field */}
            <InputField
              {...register('password')}
              type="password"
              label="Password"
              placeholder="Placeholder"
              autoComplete="new-password"
              error={errors.password?.message}
            />

            {/* Terms Checkbox */}
            <Box sx={{ mt: 1 }}>
              <Checkbox
                {...register('acceptTerms')}
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                label="I agree to the terms and conditions and privacy policy"
              />
              {errors.acceptTerms && (
                <Box 
                  sx={{ 
                    color: 'error.main', 
                    fontSize: '0.75rem', 
                    mt: 0.5,
                    fontFamily: 'Roboto, sans-serif',
                  }}
                >
                  {errors.acceptTerms.message}
                </Box>
              )}
            </Box>

            {/* Submit Button */}
            <Box sx={{ mt: 2 }}>
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
                {isLoading ? 'Creating account...' : 'Create Account'}
              </StyledButton>
            </Box>
          </Box>
        </Box>

        {/* Social Login Section */}
        <StyledSocialSection>
          <StyledSocialText>Or sign up with:</StyledSocialText>
          
          {/* Desktop: Horizontal layout */}
          <StyledSocialButtonsDesktop>
            <StyledSocialButton>Google</StyledSocialButton>
            <StyledSocialButton>Apple</StyledSocialButton>
            <StyledSocialButton>Twitter</StyledSocialButton>
          </StyledSocialButtonsDesktop>

          {/* Mobile: Vertical layout */}
          <StyledSocialButtonsMobile>
            <StyledSocialButton isFullWidth>Google</StyledSocialButton>
            <StyledSocialButton isFullWidth>Apple</StyledSocialButton>
            <StyledSocialButton isFullWidth>Twitter</StyledSocialButton>
          </StyledSocialButtonsMobile>
        </StyledSocialSection>

        {/* Footer */}
        <StyledFooterSection>
          <StyledFooterText>
            Already have an account?{' '}
            <Link
              component="button"
              type="button"
              onClick={onSwitchToLogin}
              sx={{
                fontWeight: 500,
                textDecoration: 'underline',
                cursor: 'pointer',
                '&:hover': {
                  textDecoration: 'none',
                },
              }}
            >
              Sign in here
            </Link>
          </StyledFooterText>
        </StyledFooterSection>
      </StyledRegistrationCard>
    </StyledRegistrationContainer>
  );
};
