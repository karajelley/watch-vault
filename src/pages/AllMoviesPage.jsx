import { useEffect } from "react";
import MovieCard from "../components/MovieCard";

function AllMoviesPage({ moviesArray, getMovies }) {
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>all movies page</h1>
      {moviesArray.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}

export default AllMoviesPage;
