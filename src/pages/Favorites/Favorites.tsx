import {
  EmptyState,
  Grid,
  PageContainer,
  SortSelect,
  SortSelectWrapper,
  Title,
} from "./Favorites.styled";
import { useFavorites } from "../../contexts/FavoritesContext";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useEffect, useMemo, useState } from "react";
import api from "../../services/http";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

export default function Favorites() {
  const { favorites } = useFavorites();
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);
  const [sortOption, setSortOption] = useState("a-z");
  const [loading, setLoading] = useState(true);

  const sortedFavorites = useMemo(() => {
    if (!favoriteMovies || favoriteMovies.length === 0) return [];

    const sorted = [...favoriteMovies];

    switch (sortOption) {
      case "a-z":
        return sorted.sort((a, b) =>
          String(a.title ?? "").localeCompare(String(b.title ?? ""), "pt", {
            sensitivity: "base",
          })
        );
      case "z-a":
        return sorted.sort((a, b) =>
          String(b.title ?? "").localeCompare(String(a.title ?? ""), "pt", {
            sensitivity: "base",
          })
        );
      case "rating-desc":
        return sorted.sort(
          (a, b) => (b.vote_average || 0) - (a.vote_average || 0)
        );
      case "rating-asc":
        return sorted.sort(
          (a, b) => (a.vote_average || 0) - (b.vote_average || 0)
        );
      default:
        return sorted;
    }
  }, [favoriteMovies, sortOption]);

  useEffect(() => {
    const fetchFavorites = async () => {
      setLoading(true);

      if (!favorites || favorites.length === 0) {
        setFavoriteMovies([]);
        setLoading(false);
        return;
      }

      try {
        const requests = favorites.map((id) => api.get(`/movie/${id}`));
        const responses = await Promise.all(requests);
        const movies = responses.map((res) => res.data);
        setFavoriteMovies(movies);
      } catch (error) {
        console.error("Erro ao buscar filmes favoritos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [favorites]);

  return (
    <PageContainer>
      <Title>Meus Favoritos</Title>

      <SortSelectWrapper>
        <label htmlFor="sort">Ordenar por:</label>
        <SortSelect
          id="sort"
          value={sortOption}
          onChange={(event) => setSortOption(event.target.value)}
        >
          <option value="a-z">Alfabética (A–Z)</option>
          <option value="z-a">Alfabética (Z–A)</option>
          <option value="rating-desc">Nota (Maior → Menor)</option>
          <option value="rating-asc">Nota (Menor → Maior)</option>
        </SortSelect>
      </SortSelectWrapper>

      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <LoadingSpinner />
        </div>
      ) : sortedFavorites.length === 0 ? (
        <EmptyState>Você ainda não favoritou nenhum filme.</EmptyState>
      ) : (
        <Grid>
          {sortedFavorites.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              rating={movie.vote_average}
              isFavoritesPage
            />
          ))}
        </Grid>
      )}
    </PageContainer>
  );
}
