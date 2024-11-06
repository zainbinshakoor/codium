// Button.tsx
import React from 'react';
import { StyledButton } from './Button.styles';

export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  onClick?: () => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick, disabled }) => {
  return (
    <StyledButton color={variant} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
