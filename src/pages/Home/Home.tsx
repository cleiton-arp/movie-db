import { useTranslation } from 'react-i18next';
import { useTheme } from '../../contexts/ThemeContext';
import { Container, Title, Subtitle, ActionButtons } from './Home.styled';

export default function Home() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <Title>Home</Title>
      <Subtitle>{t('home_description')}</Subtitle>

      <ActionButtons>
        <button onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </ActionButtons>
    </Container>
  );
}
