import { useNavigate } from "react-router-dom";
import {
  Card,
  MovieImage,
  MovieTitle,
  MovieRatingText,
  MovieRatingContainer,
  CardWrapper,
  FavoriteIcon,
} from "./MovieCard.styles";

import HeartFilled from "../../assets/svg/heart-filled.svg";
import HeartOutline from "../../assets/svg/heart-outline.svg";
import TrashIcon from "../../assets/svg/trash-icon.svg";
import { useState } from "react";
import { useFavorites } from "../../contexts/FavoritesContext";
import { formatMovieRating } from "../../utils/formatters";

interface MovieCardProps {
  id: number;
  title: string;
  image: string;
  rating?: number;
  contrast?: string;
  isFavoritesPage?: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  image,
  rating,
  contrast,
  isFavoritesPage = false,
}) => {
  const navigate = useNavigate();
  const [animateHeart, setAnimateHeart] = useState(false);

  const { toggleFavorite, isFavorite } = useFavorites();
  const favoriteState = isFavorite(id);

  const handleClick = () => {
    navigate(`/movie/${id}`);
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(id);
    setAnimateHeart(true);
    setTimeout(() => setAnimateHeart(false), 400);
  };

  const renderTitle = () => {
    if (contrast) {
      const lowerTitle = title.toLowerCase();
      const lowerContrast = contrast.toLowerCase();
      const startIndex = lowerTitle.indexOf(lowerContrast);

      if (startIndex !== -1) {
        const endIndex = startIndex + contrast.length;
        return (
          <>
            {title.substring(0, startIndex)}
            <span style={{ backgroundColor: "#f5c518", color: "#000" }}>
              {title.substring(startIndex, endIndex)}
            </span>
            {title.substring(endIndex)}
          </>
        );
      }
    }
    return title;
  };

  return (
    <CardWrapper>
      <FavoriteIcon
        animate={animateHeart}
        onClick={handleFavoriteClick}
        isFavorite={favoriteState}
      >
        <img
          src={
            isFavoritesPage && favoriteState
              ? TrashIcon
              : favoriteState
                ? HeartFilled
                : HeartOutline
          }
          alt="Favorito"
          style={{ width: "24px", height: "24px" }}
        />
      </FavoriteIcon>

      <Card onClick={handleClick}>
        <MovieImage src={image} alt={title} />
        <MovieTitle>{renderTitle()}</MovieTitle>
        <MovieRatingContainer>
          {rating && (
            <MovieRatingText>⭐ {formatMovieRating(rating)}</MovieRatingText>
          )}
        </MovieRatingContainer>
      </Card>
    </CardWrapper>
  );
};

export default MovieCard;
