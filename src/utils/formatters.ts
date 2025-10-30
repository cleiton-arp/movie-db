/**
 * Formata a nota do filme para ter apenas uma casa decimal
 * @param rating Nota do filme (number)
 * @returns String da nota com 1 casa decimal
 */
export function formatMovieRating(rating?: number): string {
  if (rating === undefined || isNaN(rating)) return "0.0";
  return rating.toFixed(1);
}