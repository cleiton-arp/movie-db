import { useState, type ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./ThemeContext";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import { GlobalStyle } from "../styles/GlobalStyles";

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const currentTheme = theme === "light" ? light : dark;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
