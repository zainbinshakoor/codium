// src/hooks/useTheme.ts
import { useContext } from 'react';
import { ThemeContext, DefaultTheme } from 'styled-components';

export const useTheme = (): DefaultTheme => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return theme;
};
