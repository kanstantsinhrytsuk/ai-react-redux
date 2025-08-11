import { styled } from '@mui/material/styles';
import { Button, ButtonProps } from '@mui/material';

interface StyledButtonProps extends Omit<ButtonProps, 'variant' | 'size'> {
  customVariant?: 'filled' | 'outline';
  customSize?: 'medium' | 'large';
}

export const StyledButton = styled(Button)<StyledButtonProps>(({ 
  customVariant = 'filled', 
  customSize = 'medium' 
}) => ({
  height: '48px',
  fontSize: '16px',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 500,
  letterSpacing: '0.5px',
  lineHeight: 1,
  textTransform: 'none',
  borderRadius: 0,
  border: '2px solid',
  transition: 'all 0.2s ease-in-out',
  
  ...(customSize === 'medium' && {
    padding: '12px 16px',
  }),
  
  ...(customSize === 'large' && {
    padding: '12px 24px',
  }),
  
  ...(customVariant === 'filled' && {
    backgroundColor: '#0f62fe',
    borderColor: '#0f62fe',
    color: '#ffffff',
    
    '&:hover': {
      backgroundColor: '#001d6c',
      borderColor: '#001d6c',
    },
    
    '&:focus': {
      boxShadow: '0 0 0 2px rgba(15, 98, 254, 0.2)',
    },
    
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  }),
  
  ...(customVariant === 'outline' && {
    backgroundColor: 'transparent',
    borderColor: '#0f62fe',
    color: '#0f62fe',
    
    '&:hover': {
      backgroundColor: '#0f62fe',
      color: '#ffffff',
    },
    
    '&:focus': {
      boxShadow: '0 0 0 2px rgba(15, 98, 254, 0.2)',
    },
    
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  }),
}));
