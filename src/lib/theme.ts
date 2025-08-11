import { createTheme } from '@mui/material/styles';

// Design System Tokens
const designTokens = {
  colors: {
    neutral: {
      10: '#F2F4F8',
      20: '#DDE1E6', 
      30: '#C1C7CD',
      40: '#A2A9B0',
      50: '#878D96',
      60: '#697077',
      70: '#4D5358',
      80: '#343A3F',
      90: '#21272A',
      100: '#121619'
    },
    primary: {
      30: '#A6C8FF',
      60: '#0F62FE',
      90: '#001D6C'
    },
    status: {
      success: '#25A249',
      warning: '#F1C21B',
      danger: '#DA1E28'
    },
    base: {
      white: '#FFFFFF'
    }
  },
  typography: {
    fontFamily: 'Roboto, system-ui, sans-serif',
    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700
    }
  },
  spacing: {
    base: 4 // 4px base unit
  }
};

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: designTokens.colors.primary[60],
      light: designTokens.colors.primary[30],
      dark: designTokens.colors.primary[90],
    },
    secondary: {
      main: designTokens.colors.neutral[60],
      light: designTokens.colors.neutral[40],
      dark: designTokens.colors.neutral[80],
    },
    error: {
      main: designTokens.colors.status.danger,
    },
    warning: {
      main: designTokens.colors.status.warning,
    },
    success: {
      main: designTokens.colors.status.success,
    },
    background: {
      default: designTokens.colors.neutral[10],
      paper: designTokens.colors.base.white,
    },
    text: {
      primary: designTokens.colors.neutral[90],
      secondary: designTokens.colors.neutral[70],
      disabled: designTokens.colors.neutral[50],
    },
    divider: designTokens.colors.neutral[30],
  },
  typography: {
    fontFamily: designTokens.typography.fontFamily,
    h1: {
      fontSize: '54px',
      lineHeight: '59.4px',
      fontWeight: designTokens.typography.fontWeights.bold,
      letterSpacing: '0',
    },
    h2: {
      fontSize: '42px',
      lineHeight: '46.2px',
      fontWeight: designTokens.typography.fontWeights.bold,
      letterSpacing: '0',
    },
    h3: {
      fontSize: '32px',
      lineHeight: '35.2px',
      fontWeight: designTokens.typography.fontWeights.bold,
      letterSpacing: '0',
    },
    h4: {
      fontSize: '24px',
      lineHeight: '26.4px',
      fontWeight: designTokens.typography.fontWeights.bold,
      letterSpacing: '0',
    },
    h5: {
      fontSize: '20px',
      lineHeight: '22px',
      fontWeight: designTokens.typography.fontWeights.bold,
      letterSpacing: '0',
    },
    h6: {
      fontSize: '18px',
      lineHeight: '19.8px',
      fontWeight: designTokens.typography.fontWeights.bold,
      letterSpacing: '0',
    },
    subtitle1: {
      fontSize: '16px',
      lineHeight: '17.6px',
      fontWeight: designTokens.typography.fontWeights.medium,
      letterSpacing: '0',
    },
    subtitle2: {
      fontSize: '14px',
      lineHeight: '15.4px',
      fontWeight: designTokens.typography.fontWeights.medium,
      letterSpacing: '0',
    },
    body1: {
      fontSize: '16px',
      lineHeight: '22.4px',
      fontWeight: designTokens.typography.fontWeights.regular,
      letterSpacing: '0',
    },
    body2: {
      fontSize: '18px',
      lineHeight: '25.2px',
      fontWeight: designTokens.typography.fontWeights.regular,
      letterSpacing: '0',
    },
    button: {
      fontSize: '16px',
      lineHeight: '16px',
      fontWeight: designTokens.typography.fontWeights.medium,
      letterSpacing: '0',
      textTransform: 'none' as const,
    },
    caption: {
      fontSize: '20px',
      lineHeight: '20px',
      fontWeight: designTokens.typography.fontWeights.bold,
      letterSpacing: '0',
    },
  },
  shape: {
    borderRadius: designTokens.spacing.base * 2, // 8px
  },
  spacing: designTokens.spacing.base, // 4px base unit
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: designTokens.spacing.base * 2, // 8px
          padding: `${designTokens.spacing.base * 3}px ` + 
                   `${designTokens.spacing.base * 4}px`, // 12px 16px
          fontSize: '16px',
          lineHeight: '16px',
          fontWeight: designTokens.typography.fontWeights.medium,
          textTransform: 'none',
        },
        sizeLarge: {
          padding: `${designTokens.spacing.base * 4}px ` + 
                   `${designTokens.spacing.base * 6}px`, // 16px 24px
          fontSize: '20px',
          lineHeight: '20px',
        },
        sizeSmall: {
          padding: `${designTokens.spacing.base * 2}px ` + 
                   `${designTokens.spacing.base * 3}px`, // 8px 12px
          fontSize: '14px',
          lineHeight: '14px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: designTokens.spacing.base * 2, // 8px
            '& fieldset': {
              borderColor: designTokens.colors.neutral[30],
            },
            '&:hover fieldset': {
              borderColor: designTokens.colors.neutral[50],
            },
            '&.Mui-focused fieldset': {
              borderColor: designTokens.colors.primary[60],
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: `1px solid ${designTokens.colors.neutral[20]}`,
          borderRadius: designTokens.spacing.base * 3, // 12px
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: `1px solid ${designTokens.colors.neutral[20]}`,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: designTokens.spacing.base * 4, // 16px
          fontWeight: designTokens.typography.fontWeights.medium,
        },
      },
    },
  },
});
