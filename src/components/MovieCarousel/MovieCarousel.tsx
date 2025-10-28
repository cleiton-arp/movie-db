import React, { useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { CarouselContainer, NavButton } from "./MovieCarousel.styles";

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average?: number;
}

interface MovieCarouselProps {
  movies: Movie[];
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({ movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 6; // filmes exibidos por vez

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - visibleCount, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + visibleCount, movies.length - visibleCount)
    );
  };

  const visibleMovies = movies.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div style={{ position: "relative" }}>
      <NavButton
        style={{ left: 8 }}
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        ‹
      </NavButton>
      <NavButton
        style={{ right: 8 }}
        onClick={handleNext}
        disabled={currentIndex + visibleCount >= movies.length}
      >
        ›
      </NavButton>

      <CarouselContainer>
        {visibleMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "/placeholder.jpg"
            }
            rating={movie.vote_average}
          />
        ))}
      </CarouselContainer>
    </div>
  );
};

export default MovieCarousel;
