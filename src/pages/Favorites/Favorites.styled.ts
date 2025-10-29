import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 2rem;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

export const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
`;

export const EmptyState = styled.p`
  text-align: center;
  color: #888;
  font-size: 1.1rem;
`;

export const SortSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  justify-content: flex-start;
`;

export const SortSelect = styled.select`
  background-color: #e6e6e6;
  color: #222;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 0.95rem;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #dcdcdc;
  border-color: #aaa;
  }
`;