import styled from 'styled-components';

export const Card = styled.div`
  width: 200px;
  background-color: #1e1e1e;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MovieImage = styled.img`
  width: 100%;
  height: auto;
`;

export const MovieTitle = styled.h3`
  margin: 8px 0;
  font-size: 16px;
  color: #fff;
  text-align: center;
`;

export const MovieRatingContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end; /* alinha à esquerda */
  padding-inline: 10px;
`;

export const MovieRatingText = styled.p`
  font-weight: bold;
  color: #f5c518;
  margin: 0; /* remove margin padrão do p */
`;
export const MovieRating = styled.p`
  font-weight: bold;
  color: #f5c518;
  margin-bottom: 8px;
`;
