import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { GlobalStyle } from "./styles/GlobalStyles";
import "./i18n";
import { Header } from "./components/Header";
import { useState } from "react";
import { FavoritesProvider } from "./contexts/FavoritesContext";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lang, setLang] = useState("en");

  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <FavoritesProvider>
          <Header />
          <GlobalStyle />
          <AppRoutes />
        </FavoritesProvider>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}
