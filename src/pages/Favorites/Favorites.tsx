import { EmptyState, Grid, PageContainer, Title } from "./Favorites.styled";
import { useFavorites } from "../../contexts/FavoritesContext";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useEffect, useState } from "react";
import api from "../../services/http";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

export default function Favorites() {
  const { favorites } = useFavorites();
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (favorites.length === 0) {
        setFavoriteMovies([]);
        return;
      }

      try {
        const requests = favorites.map((id) => api.get(`/movie/${id}`));
        const responses = await Promise.all(requests);
        const movies = responses.map((res) => res.data);
        setFavoriteMovies(movies);
      } catch (error) {
        console.error("Erro ao buscar filmes favoritos:", error);
      }
    };

    console.log("favoriteMovies", favoriteMovies);

    fetchFavorites();
  }, [favorites]);

  return (
    <PageContainer>
      <Title>Meus Favoritos</Title>

      {favorites.length === 0 ? (
        <EmptyState>Você ainda não favoritou nenhum filme.</EmptyState>
      ) : (
        <Grid>
          {favoriteMovies.map((movie) => (
            <div>
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                rating={movie.vote_average}
                isFavoritesPage
              />
            </div>
          ))}
        </Grid>
      )}
    </PageContainer>
  );
}
