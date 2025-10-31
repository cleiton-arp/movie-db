import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../contexts/useTheme";
import {
  HeaderContainer,
  Logo,
  NavLinks,
  SearchBar,
  RightSection,
  ActionButtons,
  ToggleButton,
} from "./Header.styles";
import { useNavigate } from "react-router-dom";

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const onToggleLanguage = () => {
    const newLang = i18n.language === "en" ? "pt" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <HeaderContainer>
      <div className="main-header">
        <NavLinks>
          <a href="/movie-db/">
            <Logo>MovieDB</Logo>
          </a>
        </NavLinks>

        <SearchBar
          type="text"
          placeholder={t("components.header.searchPlaceholder")}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={handleKeyDown}
        />

        <NavLinks>
          <a href="/movie-db/">{t("components.header.home")}</a>
          <a href="/movie-db/#/favorites">{t("components.header.favorites")}</a>
        </NavLinks>
        <RightSection>
          <ActionButtons>
            <ToggleButton onClick={toggleTheme}>
              {theme === "light" ? "🌙" : "☀️"}
            </ToggleButton>
            <ToggleButton onClick={onToggleLanguage}>
              {i18n.language === "en" ? "en" : "🇧🇷"}
            </ToggleButton>
          </ActionButtons>
        </RightSection>
      </div>
    </HeaderContainer>
  );
};
