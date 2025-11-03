import { useTranslation } from "react-i18next";
import { Container, MoviesGrid, Title } from "./Home.styled";
import { useEffect, useState, useRef, useCallback } from "react";
import api from "../../services/http";
import type { Movie } from "../../services/tmdb";
import MovieCard from "../../components/MovieCard/MovieCard";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

interface TMDBResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export default function Home() {
  const { t } = useTranslation();
  const [movies, setMovies] = useState<Movie[]>([]);
  const uniqueMovies = movies.filter(
    (movie, index, self) => index === self.findIndex((m) => m.id === movie.id)
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef<HTMLDivElement | null>(null);

  const fetchMovies = useCallback(async (pageToFetch: number) => {
    try {
      setLoading(true);
      const response = await api.get<TMDBResponse>("/movie/popular", {
        params: { page: pageToFetch },
      });

      const newMovies = response.data.results;
      setMovies((prev) => [...prev, ...newMovies]);
      setHasMore(pageToFetch < response.data.total_pages);
    } catch (err) {
      console.error("Erro ao buscar filmes populares:", err);
      setError("Não foi possível carregar os filmes populares.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovies(1);
  }, [fetchMovies]);

  useEffect(() => {
    if (!hasMore || loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1.0 }
    );

    const currentRef = observerRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasMore, loading]);

  useEffect(() => {
    if (page > 1) fetchMovies(page);
  }, [page, fetchMovies]);

  return (
    <Container>
      <Title>{t("pages.home.popularMovies")}</Title>

      {error && <p>{error}</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <MoviesGrid>
          {uniqueMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              rating={movie.vote_average}
            />
          ))}
        </MoviesGrid>
      </div>

      <div
        ref={observerRef}
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "2rem 0",
        }}
      >
        {loading && <LoadingSpinner />}
      </div>
    </Container>
  );
}
