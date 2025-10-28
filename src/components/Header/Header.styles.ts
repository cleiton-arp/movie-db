import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem ;

  .main-header {
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0.25rem 0;
`;

export const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SearchBar = styled.input`
  flex: 1;
  max-width: 400px;
  margin: 0 2rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 1rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ThemeButton = styled.button`
  border: none;
  background: transparent;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const ActionButtons = styled.div`
  display: flex;

  button {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    border-radius: 8px;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const ToggleButton = styled.button`
  background: ${({ theme }) => theme.colors.secondary}22;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.secondary}55;
  border-radius: 50%;
  margin-right: 0.2rem;
  font-size: 1.2rem;
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary}33;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const LangButton = styled(ThemeButton)``;
