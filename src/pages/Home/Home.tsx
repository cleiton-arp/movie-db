import { useTranslation } from "react-i18next";
import { Container, Title } from "./Home.styled";
import { useEffect, useState } from "react";
import api from "../../services/http";
import type { Movie } from "../../services/tmdb";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";

interface TMDBResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get<TMDBResponse>("/movie/popular", {
          params: { page: 1 },
        });

        setMovies(response.data.results);
      } catch (err) {
        console.error("Erro ao buscar filmes populares:", err);
        setError("Não foi possível carregar os filmes populares.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Container>
      <Title>Filmes Populares</Title>
      <MovieCarousel movies={movies} />
    </Container>
  );
}
