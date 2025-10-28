import { useTranslation } from 'react-i18next';
import { useTheme } from '../../contexts/ThemeContext';
import { Container, Title, Subtitle, ActionButtons } from './Movie.styled';

export default function Movie() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <Title>Movie</Title>
      <Subtitle>{t('home_description')}</Subtitle>

      <ActionButtons>
        <button onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </ActionButtons>
    </Container>
  );
}
