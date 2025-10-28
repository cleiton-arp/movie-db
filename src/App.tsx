import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { GlobalStyle } from './styles/GlobalStyles';
import './i18n';
import { Header } from './components/Header';
import { useState } from 'react';


export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lang, setLang] = useState('en');
  
  return (
    <ThemeContextProvider>
      <BrowserRouter>
       <Header />
        <GlobalStyle />
        <AppRoutes />
      </BrowserRouter>
    </ThemeContextProvider>
  );
}
