// Input.styles.ts
import styled from 'styled-components';
export const InputWrapper = styled.div `
  position: relative;
  margin: 20px 0;
  width: 100%;
`;
export const StyledInput = styled.input `
  padding: 12px 16px;
  width: 100%;
  border: 1px solid ${({ error }) => (error ? '#f5222d' : '#d9d9d9')};
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  background-color: #fff;
  transition: all 0.3s ease;
  outline: none;
  box-shadow: ${({ error }) => (error ? '0 0 0 2px rgba(255, 82, 82, 0.2)' : 'none')};
  padding-left: ${({ icon }) => (icon ? '40px' : '16px')}; /* Adjust padding if icon exists */
  
  &:hover {
    border-color: #40a9ff;
  }

  &:focus {
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2); /* Focused input glow */
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
    border-color: #d9d9d9;
  }

  &::placeholder {
    color: #aaa;
  }
`;
export const ErrorMessage = styled.span `
  color: #f5222d;
  font-size: 12px;
  margin-top: 5px;
  display: block;
`;
export const IconWrapper = styled.div `
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  color: #888;
  pointer-events: none; /* Prevents icon from interfering with input */
`;
