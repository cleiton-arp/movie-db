import { formatMovieRating } from "../formatters";

describe("formatMovieRating", () => {
  it("formata nota com uma casa decimal", () => {
    expect(formatMovieRating(8.456)).toBe("8.5");
    expect(formatMovieRating(7)).toBe("7.0");
  });

  it("trata valores inválidos", () => {
    expect(formatMovieRating(NaN)).toBe("0.0");
    expect(formatMovieRating(undefined as unknown as number)).toBe("0.0");
  });
});
