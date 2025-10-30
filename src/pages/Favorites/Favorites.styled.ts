import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
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

export const EmptyState = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #888;
  font-size: 1.1rem;
  position: relative;
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

export const EmptyImage = styled.img`
  width: 80vw; 
  display: block;
  ;
`;

export const OverlayContent = styled.div`
  font-size: clamp(1.5rem, 5vw, 2.5rem); /* mínimo 1.5rem, ideal 5vw, máximo 2.5rem */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
`;


export const CTAButton = styled.button`
  font-size: clamp(1.5rem, 5vw, 2.5rem); /* ajusta automaticamente */
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #6e7070cf;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    transform: scale(1.05);
    background-color: #8c8d8dcf;
  }
`;
