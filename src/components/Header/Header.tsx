import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../contexts/ThemeContext';
import {
  HeaderContainer,
  Logo,
  NavLinks,
  SearchBar,
  RightSection,
  ActionButtons,
  ToggleButton
} from './Header.styles';

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const onToggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('lang', newLang);
  };

  return (
    <HeaderContainer>

      <div className="main-header">
        <NavLinks>
          <a href="/"><Logo>MovieDB</Logo></a>
        </NavLinks>

        <SearchBar type="text" placeholder={t('search.placeholder')} />

        <NavLinks>
          <a href="/">{t('nav.home')}</a>
          <a href="/favorites">{t('nav.favorites')}</a>
        </NavLinks>
        <RightSection>
          <ActionButtons>
            <ToggleButton onClick={toggleTheme}>
              {theme === 'light' ? '🌙' : '☀️'}
            </ToggleButton>
            <ToggleButton onClick={onToggleLanguage}>
              {i18n.language === 'en' ? 'en' : '🇧🇷'}
            </ToggleButton>
          </ActionButtons>
        </RightSection>
      </div>
    </HeaderContainer>
  );
};
