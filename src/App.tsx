import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { GlobalStyle } from "./styles/GlobalStyles";
import "./i18n";
import { Header } from "./components/Header";
import { useState } from "react";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { Layout } from "./components/Layout/Layout";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lang, setLang] = useState("en");

  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <FavoritesProvider>
          <GlobalStyle />
          <Layout>
            <AppRoutes />
          </Layout>
        </FavoritesProvider>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}
