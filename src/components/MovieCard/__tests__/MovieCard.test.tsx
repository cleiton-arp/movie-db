import { render, screen } from "@testing-library/react";
import MovieCard from "../MovieCard";
import { FavoritesProvider } from "../../../contexts/FavoritesContext"; // ajuste o caminho

describe("MovieCard", () => {
  it("deve renderizar o título e o poster do filme", () => {
    render(
      <FavoritesProvider>
        <MovieCard
          id={1}
          title="Inception"
          image="/inception.jpg"
          rating={8.8}
          onFavorite={() => {}}
        />
      </FavoritesProvider>
    );

    expect(screen.getByText("Inception")).toBeInTheDocument();
    const poster = screen.getByAltText("Inception poster") as HTMLImageElement;
    expect(poster).toBeInTheDocument();
    expect(poster.src).toContain("/inception.jpg");
  });
});
