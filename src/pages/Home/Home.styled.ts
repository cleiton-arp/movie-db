import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
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

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
`;

export const MovieCard = styled.div`
  background-color: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
  color: #fff;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  height: 270px;
  object-fit: cover;
`;

export const MovieTitle = styled.h2`
  font-size: 1rem;
  padding: 0.5rem;
`;