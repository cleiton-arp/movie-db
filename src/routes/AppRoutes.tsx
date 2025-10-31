import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Favorites from "../pages/Favorites/Favorites";
import Movie from "../pages/Movie/Movie";
import Search from "../pages/Search/Search";
import NotFound from "../pages/NotFound/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie-db/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/movie-db/favorites" element={<Favorites />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="/movie-db/movie/:id" element={<Movie />} />
      <Route path="/search" element={<Search />} />
      <Route path="/movie-db/search" element={<Search />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/movie-db/*" element={<NotFound />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="/movie-db/not-found*" element={<NotFound />} />
    </Routes>
  );
}
