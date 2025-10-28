import api from './http';

export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  release_date: string;
  vote_average: number;
}

interface TMDBResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}


export const getPopularMovies = async (page = 1): Promise<Movie[]> => {
  try {
    const response = await api.get<TMDBResponse>('/movie/popular', {
      params: { page },
    });
    return response.data.results;
  } catch (error) {
    console.error('Erro ao buscar filmes populares:', error);
    throw error;
  }
};
