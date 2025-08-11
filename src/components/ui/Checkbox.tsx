import React, { forwardRef } from 'react';
import { FormControlLabel } from '@mui/material';
import { StyledCheckbox } from './styled/StyledCheckbox';

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, ...props }, ref) => {
    if (label) {
      return (
        <FormControlLabel
          control={<StyledCheckbox inputRef={ref} {...props} />}
          label={label}
          className={className}
          sx={{
            margin: 0,
            alignItems: 'center',
            gap: '8px',
            '& .MuiFormControlLabel-label': {
              fontSize: '14px',
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 400,
              color: '#21272a',
              lineHeight: 1.4,
              cursor: 'pointer',
            },
          }}
        />
      );
    }

    return <StyledCheckbox inputRef={ref} className={className} {...props} />;
  }
);

Checkbox.displayName = 'Checkbox';
