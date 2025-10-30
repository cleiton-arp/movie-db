// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import { ThemeContextProvider } from "./contexts/ThemeContextProvider";
import { GlobalStyle } from "./styles/GlobalStyles";
import "./i18n";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { Layout } from "./components/Layout/Layout";

export default function App() {
  // const [isDarkMode, setIsDarkMode] = useState(false);
  // const [lang, setLang] = useState("en");

  return (
    <ThemeContextProvider>
      <HashRouter>
        <FavoritesProvider>
          <GlobalStyle />
          <Layout>
            <AppRoutes />
          </Layout>
        </FavoritesProvider>
      </HashRouter>
    </ThemeContextProvider>
  );
}
