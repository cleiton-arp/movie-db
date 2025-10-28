import { Container, Title, Subtitle, ActionButtons } from "./Search.styled";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";
import api from "../../services/http";

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average?: number;
}

export default function Search() {
  const location = useLocation();
  const [movies, setMovies] = useState<Movie[]>([]);

  const query = new URLSearchParams(location.search).get("q") || "";

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) return;
      try {
        const response = await api.get(`search/movie?query=${query}`, {});
        setMovies(response.data.results);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <Container>
      <div>
        <h2>Resultados para "{query}"</h2>
        {movies.length > 0 ? (
          <MovieCarousel movies={movies} contrast={query} />
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </Container>
  );
}
