import styled, { keyframes } from 'styled-components';

export const Card = styled.div`
  width: 200px;
  height: 400px;
  background-color: #1e1e1e;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 5px;
  cursor: pointer;
`;

export const MovieImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
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
  justify-content: flex-end;
  padding-inline: 10px;
`;

export const MovieRatingText = styled.p`
  font-weight: bold;
  color: #f5c518;
  margin: 0;
`;
export const MovieRating = styled.p`
  font-weight: bold;
  color: #f5c518;
  margin-bottom: 8px;
`;

const pulseColor = keyframes`
  0% {
    transform: scale(1);
    filter: brightness(1);
  }
  25% {
    transform: scale(1.3);
    filter: brightness(1.5);
  }
  50% {
    transform: scale(1);
    filter: brightness(1);
  }
  75% {
    transform: scale(1.15);
    filter: brightness(1.3);
  }
  100% {
    transform: scale(1);
    filter: brightness(1);
  }
`;


export const FavoriteIcon = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "animate" && prop !== "isFavorite"
})<{ isFavorite: boolean; animate: boolean }>`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 2;
  width: 28px;
  height: 28px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 100%;
    height: 100%;
    transition: fill 0.3s, filter 0.3s;
    animation: ${(props) => (props.animate ? pulseColor : "none")} 0.4s ease;
    filter: ${(props) =>
      props.isFavorite ? "brightness(1)" : "brightness(0.7)"};
  }
`;

export const CardWrapper = styled.div`
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
   &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 16px rgba(0,0,0,0.3);
`;