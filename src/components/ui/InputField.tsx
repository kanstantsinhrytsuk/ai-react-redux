import React, { forwardRef } from 'react';
import { StyledTextField } from './styled/StyledTextField';

interface InputFieldProps {
  label?: string;
  error?: string;
  helperText?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  className?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ 
    label, 
    error, 
    helperText, 
    className,
    ...props 
  }, ref) => {
    return (
      <StyledTextField
        inputRef={ref}
        label={label}
        error={!!error}
        helperText={error || helperText}
        variant="outlined"
        fullWidth
        size="medium"
        className={className}
        InputLabelProps={{
          shrink: true,
        }}
        {...props}
      />
    );
  }
);

InputField.displayName = 'InputField';
