import { useTranslation } from "react-i18next";
import { Container, Info, Poster } from "./Movie.styled";
import api from "../../services/http";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFavorites } from "../../contexts/FavoritesContext";
import { FavoriteIcon } from "../../components/MovieCard/MovieCard.styles";
import HeartFilled from "../../assets/svg/heart-filled.svg";
import HeartOutline from "../../assets/svg/heart-outline.svg";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
  overview: string;
  genres: { id: number; name: string }[];
  release_date: string;
}

export default function Movie() {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);

  const [animateHeart, setAnimateHeart] = useState(false);

  const { toggleFavorite, isFavorite } = useFavorites();
  const favoriteState = isFavorite(Number(id));

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(Number(id));
    setAnimateHeart(true);
    setTimeout(() => setAnimateHeart(false), 400);
  };

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await api.get(`/movie/${id}`, {});
        setMovie(response.data);
      } catch (error) {
        console.error("Erro ao buscar o filme:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchMovie();
  }, []);

  if (loading) {
    return (
      <Container
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <LoadingSpinner />
      </Container>
    );
  }

  if (!movie) return <p>{error || "Filme não encontrado."}</p>;

  return (
    <Container>
      <div style={{ position: "relative" }}>
        <Poster
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "/placeholder.jpg"
          }
          alt={movie.title}
        />
        <FavoriteIcon
          animate={animateHeart}
          onClick={handleFavoriteClick}
          isFavorite={favoriteState}
        >
          <img
            src={favoriteState ? HeartFilled : HeartOutline}
            alt="Favorito"
            style={{ width: "28px", height: "28px" }}
          />
        </FavoriteIcon>
      </div>
      <Info>
        <h2>{movie.title}</h2>
        <p>
          <strong>Gêneros:</strong> {movie.genres.map((g) => g.name).join(", ")}
        </p>
        <p>
          <strong>Data de lançamento:</strong> {movie.release_date}
        </p>
        <p>
          <strong>Nota:</strong> ⭐ {movie.vote_average}
        </p>
        <p>
          <strong>Sinopse:</strong> {movie.overview}
        </p>
      </Info>
    </Container>
  );
}
