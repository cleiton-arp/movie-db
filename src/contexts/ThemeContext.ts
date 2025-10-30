import { createContext } from 'react';

export type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeContextType);
