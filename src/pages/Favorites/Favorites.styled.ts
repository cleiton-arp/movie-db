import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.85;
`;

export const ActionButtons = styled.div`
  margin-top: 2rem;

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
