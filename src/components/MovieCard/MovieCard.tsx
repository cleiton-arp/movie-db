import { useNavigate } from "react-router-dom";
import {
  Card,
  MovieImage,
  MovieTitle,
  MovieRatingText,
  MovieRatingContainer,
} from "./MovieCard.styles";

interface MovieCardProps {
  id: number;
  title: string;
  image: string;
  rating?: number; // opcional
}

const MovieCard: React.FC<MovieCardProps> = ({ id, title, image, rating }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <Card onClick={handleClick}>
      <MovieImage src={image} alt={title} />
      <MovieTitle>{title}</MovieTitle>
      <MovieRatingContainer>
        {rating && <MovieRatingText>⭐ {rating}</MovieRatingText>}
      </MovieRatingContainer>
    </Card>
  );
};

export default MovieCard;
