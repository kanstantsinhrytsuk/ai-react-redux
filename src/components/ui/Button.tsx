import React from 'react';
import { CircularProgress } from '@mui/material';
import { StyledButton } from './styled/StyledButton';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'filled' | 'outline';
  size?: 'medium' | 'large';
  icon?: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'filled',
  size = 'medium',
  icon,
  isLoading = false,
  disabled,
  className,
  ...props
}) => {
  return (
    <StyledButton
      customVariant={variant}
      customSize={size}
      disabled={disabled || isLoading}
      className={className}
      startIcon={isLoading ? (
        <CircularProgress 
          size={20} 
          sx={{ 
            color: variant === 'filled' ? 'white' : '#0f62fe' 
          }} 
        />
      ) : icon}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </StyledButton>
  );
};
