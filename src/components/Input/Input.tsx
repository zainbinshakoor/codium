// Input.tsx
import React from 'react';
import { StyledInput, InputWrapper, ErrorMessage, IconWrapper } from './Input.styles';

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  error,
  disabled,
  icon,
}) => {
  return (
    <InputWrapper>
      <div style={{ position: 'relative' }}>
        {icon && <IconWrapper>{icon}</IconWrapper>}
        <StyledInput
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          error={error}
        />
      </div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
};

export default Input;
