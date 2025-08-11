import { styled } from '@mui/material/styles';
import { Box, Paper } from '@mui/material';

export const StyledRegistrationContainer = styled(Box)(() => ({
  minHeight: '100vh',
  width: '100%',
  backgroundColor: '#f2f4f8',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px',
}));

export const StyledRegistrationCard = styled(Paper)(() => ({
  width: '100%',
  maxWidth: '680px',
  backgroundColor: '#ffffff',
  border: '1px solid #dde1e6',
  borderRadius: 0,
  padding: '80px',
  boxShadow: 'none',
  
  '@media (max-width: 768px)': {
    padding: '32px 16px',
    maxWidth: '100%',
  },
}));

export const StyledFormHeader = styled(Box)(() => ({
  textAlign: 'center',
  marginBottom: '24px',
  paddingBottom: '24px',
}));

export const StyledFormTitle = styled('h1')(() => ({
  fontSize: '42px',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 700,
  color: '#21272a',
  lineHeight: 1.1,
  marginBottom: '8px',
  margin: 0,
  
  '@media (max-width: 768px)': {
    fontSize: '32px',
  },
}));

export const StyledFormSubtitle = styled('p')(() => ({
  fontSize: '18px',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 400,
  color: '#21272a',
  lineHeight: 1.4,
  margin: 0,
  
  '@media (max-width: 768px)': {
    fontSize: '16px',
  },
}));

export const StyledFieldsRow = styled(Box)(() => ({
  display: 'flex',
  gap: '16px',
  
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '16px',
  },
}));

export const StyledSocialSection = styled(Box)(() => ({
  paddingTop: '24px',
  marginTop: '24px',
  borderTop: '1px solid #dde1e6',
}));

export const StyledSocialText = styled('p')(() => ({
  fontSize: '16px',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 400,
  color: '#21272a',
  lineHeight: 1.4,
  textAlign: 'center',
  marginBottom: '16px',
  margin: '0 0 16px 0',
}));

export const StyledSocialButtonsDesktop = styled(Box)(() => ({
  display: 'flex',
  gap: '8px',
  
  '@media (max-width: 768px)': {
    display: 'none',
  },
}));

export const StyledSocialButtonsMobile = styled(Box)(() => ({
  display: 'none',
  
  '@media (max-width: 768px)': {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
}));

export const StyledFooterSection = styled(Box)(() => ({
  paddingTop: '24px',
  marginTop: '24px',
  borderTop: '1px solid #dde1e6',
}));

export const StyledFooterText = styled('p')(() => ({
  fontSize: '14px',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 400,
  color: '#001d6c',
  lineHeight: 1.4,
  textAlign: 'center',
  margin: 0,
}));
