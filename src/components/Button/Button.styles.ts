// Button.styles.ts
import styled, { css } from 'styled-components';

const colorStyles = {
  primary: '#1890ff',
  secondary: '#6c757d',
  success: '#52c41a',
  danger: '#f5222d',
};

type StyledButtonProps = {
  color: 'primary' | 'secondary' | 'success' | 'danger';
  disabled?: boolean;
};

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 10px 20px;
  border: 1px solid transparent;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => colorStyles[color]};
  border-color: ${({ color }) => colorStyles[color]};
  
  &:hover {
    background-color: ${({ color }) =>
      color === 'primary'
        ? '#40a9ff'
        : color === 'secondary'
        ? '#5a6268'
        : color === 'success'
        ? '#73d13d'
        : '#ff4d4f'};
    border-color: ${({ color }) =>
      color === 'primary'
        ? '#40a9ff'
        : color === 'secondary'
        ? '#5a6268'
        : color === 'success'
        ? '#73d13d'
        : '#ff4d4f'};
  }

  &:active {
    background-color: ${({ color }) =>
      color === 'primary'
        ? '#096dd9'
        : color === 'secondary'
        ? '#495057'
        : color === 'success'
        ? '#52c41a'
        : '#d4380d'};
    border-color: ${({ color }) =>
      color === 'primary'
        ? '#096dd9'
        : color === 'secondary'
        ? '#495057'
        : color === 'success'
        ? '#52c41a'
        : '#d4380d'};
  }

  &:disabled {
    background-color: #f5f5f5;
    color: #d9d9d9;
    cursor: not-allowed;
    border-color: #d9d9d9;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ color }) => colorStyles[color]}66;
  }
`;

