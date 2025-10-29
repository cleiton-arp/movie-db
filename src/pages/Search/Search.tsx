import { Container, Title, MoviesGrid } from "./Search.styled";
import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef, useCallback } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import api from "../../services/http";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average?: number;
}

export default function Search() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";

  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef<HTMLDivElement | null>(null);

  const fetchMovies = useCallback(async () => {
    if (!query || !hasMore) return;

    try {
      setLoading(true);
      const response = await api.get(`search/movie`, {
        params: { query, page },
      });

      if (page === 1) {
        setMovies(response.data.results);
      } else {
        setMovies((prev) => [...prev, ...response.data.results]);
      }

      setHasMore(response.data.results.length > 0);
    } catch (err) {
      console.error("Erro ao buscar filmes:", err);
      setError("Não foi possível carregar os resultados.");
    } finally {
      setLoading(false);
    }
  }, [query, page, hasMore]);

  useEffect(() => {
    setPage(1);
    setMovies([]);
    setHasMore(true);
  }, [query]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies, page]);

  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      },
      { rootMargin: "200px" }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [loading, hasMore]);

  return (
    <Container>
      <Title>Resultados para "{query}"</Title>

      {error && <p>{error}</p>}

      <MoviesGrid>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : ""
            }
            rating={movie.vote_average}
            contrast={query}
          />
        ))}
      </MoviesGrid>

      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <LoadingSpinner />
        </div>
      )}

      <div ref={observerRef} style={{ height: "1px" }} />
      {!loading && movies.length === 0 && <p>Nenhum resultado encontrado.</p>}
    </Container>
  );
}
