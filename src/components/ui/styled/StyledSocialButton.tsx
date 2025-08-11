import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

interface StyledSocialButtonProps {
  isFullWidth?: boolean;
}

export const StyledSocialButton = styled(Button)<StyledSocialButtonProps>(({ 
  isFullWidth = false 
}) => ({
  height: '48px',
  fontSize: '16px',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 500,
  letterSpacing: '0.5px',
  lineHeight: 1,
  textTransform: 'none',
  borderRadius: 0,
  border: '2px solid #0f62fe',
  backgroundColor: 'transparent',
  color: '#0f62fe',
  transition: 'all 0.2s ease-in-out',
  padding: '12px 16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  
  ...(isFullWidth && {
    width: '100%',
  }),
  
  ...(!isFullWidth && {
    flex: 1,
  }),
  
  '&:hover': {
    backgroundColor: '#0f62fe',
    color: '#ffffff',
    borderColor: '#0f62fe',
  },
  
  '&:focus': {
    boxShadow: '0 0 0 2px rgba(15, 98, 254, 0.2)',
  },
}));
