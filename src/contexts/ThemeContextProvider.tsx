import { useEffect, useState, type ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./ThemeContext";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import { GlobalStyle } from "../styles/GlobalStyles";

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const getInitialTheme = (): "light" | "dark" => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    return savedTheme ?? "light";
  };

  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

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
