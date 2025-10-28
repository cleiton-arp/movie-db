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
  rating?: number;
  contrast?: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  image,
  rating,
  contrast,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${id}`);
  };

  const renderTitle = () => {
    console.log("contrast", contrast);
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
    <Card onClick={handleClick}>
      <MovieImage src={image} alt={title} />
      <MovieTitle>{renderTitle()}</MovieTitle>
      <MovieRatingContainer>
        {rating && <MovieRatingText>⭐ {rating}</MovieRatingText>}
      </MovieRatingContainer>
    </Card>
  );
};

export default MovieCard;
