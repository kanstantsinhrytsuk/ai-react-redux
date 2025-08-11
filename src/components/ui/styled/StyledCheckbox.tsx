import { styled } from '@mui/material/styles';
import { Checkbox } from '@mui/material';

export const StyledCheckbox = styled(Checkbox)(() => ({
  width: '16px',
  height: '16px',
  padding: 0,
  borderRadius: '2px',
  
  '& .MuiSvgIcon-root': {
    width: '16px',
    height: '16px',
  },
  
  '&.MuiCheckbox-root': {
    color: '#c1c7cd',
    
    '&.Mui-checked': {
      color: '#0f62fe',
    },
    
    '&:hover': {
      backgroundColor: 'rgba(15, 98, 254, 0.04)',
    },
    
    '&.Mui-focusVisible': {
      boxShadow: '0 0 0 2px rgba(15, 98, 254, 0.2)',
    },
  },
}));
