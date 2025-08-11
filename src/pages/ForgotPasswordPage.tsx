import React from 'react';
import { 
  ForgotPasswordForm 
} from '../features/auth/components/ForgotPasswordForm';
import { useNavigate } from 'react-router-dom';

export const ForgotPasswordPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate('/auth');
  };

  return (
    <ForgotPasswordForm onBackToLogin={handleBackToLogin} />
  );
};
