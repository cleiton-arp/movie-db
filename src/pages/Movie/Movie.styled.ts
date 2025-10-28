import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 24px;
  padding: 24px;
  max-width: 1200px; 
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 16px;
  }
`;

export const Poster = styled.img`
  width: 300px;
  height: auto;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;
