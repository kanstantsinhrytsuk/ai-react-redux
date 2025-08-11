import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { Button } from './Button';

interface SocialLoginProps {
  onGoogleLogin?: () => void;
  onAppleLogin?: () => void;
  onTwitterLogin?: () => void;
}

export const SocialLogin: React.FC<SocialLoginProps> = ({
  onGoogleLogin,
  onAppleLogin,
  onTwitterLogin,
}) => {
  return (
    <Box 
      sx={{ 
        display: 'flex',
        flexDirection: 'column', 
        gap: 2, 
        pt: 3, 
        borderTop: '1px solid #dde1e6',
        width: '100%'
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontSize: '16px',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 400,
          color: '#21272a',
          lineHeight: 1.4,
          textAlign: 'center',
        }}
      >
        Or log in with:
      </Typography>
      
      {/* Desktop: Horizontal layout */}
      <Stack 
        direction="row" 
        spacing={1} 
        sx={{ 
          display: { xs: 'none', md: 'flex' },
          width: '100%' 
        }}
      >
        <Button
          variant="outline"
          size="medium"
          className="flex-1"
          onClick={onGoogleLogin}
        >
          Google
        </Button>
        
        <Button
          variant="outline"
          size="medium"
          className="flex-1"
          onClick={onAppleLogin}
        >
          Apple
        </Button>
        
        <Button
          variant="outline"
          size="medium"
          className="flex-1"
          onClick={onTwitterLogin}
        >
          Twitter
        </Button>
      </Stack>
      
      {/* Mobile: Vertical layout */}
      <Stack 
        direction="column" 
        spacing={1} 
        sx={{ 
          display: { xs: 'flex', md: 'none' },
          width: '100%' 
        }}
      >
        <Button
          variant="outline"
          size="medium"
          className="w-full"
          onClick={onGoogleLogin}
        >
          Google
        </Button>
        
        <Button
          variant="outline"
          size="medium"
          className="w-full"
          onClick={onAppleLogin}
        >
          Apple
        </Button>
        
        <Button
          variant="outline"
          size="medium"
          className="w-full"
          onClick={onTwitterLogin}
        >
          Twitter
        </Button>
      </Stack>
    </Box>
  );
};
