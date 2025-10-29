import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  padding: 2rem;
  text-align: center;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;

  @media (min-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1350px) {
    grid-template-columns: repeat(6, 1fr);
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