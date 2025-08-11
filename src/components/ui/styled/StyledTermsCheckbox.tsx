import { styled } from '@mui/material/styles';
import { Checkbox, FormControlLabel } from '@mui/material';

export const StyledTermsCheckbox = styled(Checkbox)(() => ({
  width: '16px',
  height: '16px',
  padding: 0,
  marginRight: '8px',
  color: '#c1c7cd',
  
  '&.Mui-checked': {
    color: '#0f62fe',
  },
  
  '& .MuiSvgIcon-root': {
    fontSize: '16px',
    borderRadius: '2px',
  },
}));

export const StyledTermsLabel = styled(FormControlLabel)(() => ({
  margin: 0,
  alignItems: 'flex-start',
  
  '& .MuiFormControlLabel-label': {
    fontSize: '14px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    color: '#21272a',
    lineHeight: 1.4,
  },
}));
