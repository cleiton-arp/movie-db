import { useTranslation } from "react-i18next";
import { Container, Info, Poster } from "./Movie.styled";
import api from "../../services/http";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await api.get(`/movie/${id}`, {});
        console.log("response", response);
        setMovie(response.data);
      } catch (err) {
        console.error("Erro ao buscar o filme:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchMovie();
  }, []);

  if (!movie) return <p>Carregando...</p>;

  return (
    <Container>
      <Poster
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "/placeholder.jpg"
        }
        alt={movie.title}
      />
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
