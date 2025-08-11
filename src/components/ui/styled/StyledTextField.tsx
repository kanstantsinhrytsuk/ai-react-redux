import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const StyledTextField = styled(TextField)(({ error }) => ({
  '& .MuiOutlinedInput-root': {
    height: '48px',
    backgroundColor: '#f2f4f8',
    border: 'none',
    borderBottom: '1px solid #c1c7cd',
    borderRadius: 0,
    fontSize: '16px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    color: '#21272a',
    transition: 'all 0.2s ease-in-out',
    
    '& fieldset': {
      border: 'none',
    },
    
    '&:hover': {
      backgroundColor: '#ffffff',
      borderBottomColor: '#0f62fe',
    },
    
    '&.Mui-focused': {
      backgroundColor: '#ffffff',
      borderBottomColor: '#0f62fe',
      boxShadow: 'none',
    },
    
    '& input': {
      padding: '12px 16px',
      fontSize: '16px',
      lineHeight: 1.4,
      fontFamily: 'Roboto, sans-serif',
      
      '&::placeholder': {
        color: '#697077',
        opacity: 1,
      },
    },
  },
  
  '& .MuiInputLabel-root': {
    fontSize: '14px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    color: '#21272a',
    lineHeight: 1.4,
    position: 'static',
    transform: 'none',
    marginBottom: '8px',
    
    '&.Mui-focused': {
      color: '#21272a',
    },
  },
  
  '& .MuiFormHelperText-root': {
    fontSize: '12px',
    fontFamily: 'Roboto, sans-serif',
    color: '#697077',
    lineHeight: 1.4,
    marginTop: '4px',
    marginLeft: 0,
    
    '&.Mui-error': {
      color: '#da1e28',
    },
  },
  
  ...(error && {
    '& .MuiOutlinedInput-root': {
      borderBottomColor: '#da1e28',
      backgroundColor: '#fef2f2',
    },
  }),
}));
