import {
  Card,
  MovieImage,
  MovieTitle,
  MovieRatingText,
  MovieRatingContainer,
} from "./MovieCard.styles";

interface MovieCardProps {
  title: string;
  image: string;
  rating?: number; // opcional
}

const MovieCard: React.FC<MovieCardProps> = ({ title, image, rating }) => {
  return (
    <Card>
      <MovieImage src={image} alt={title} />
      <MovieTitle>{title}</MovieTitle>
      <MovieRatingContainer>
        {rating && <MovieRatingText>⭐ {rating}</MovieRatingText>}
      </MovieRatingContainer>
    </Card>
  );
};

export default MovieCard;
