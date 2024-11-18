import { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

function AllMoviesPage({ moviesArray, getMovies }) {
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>all movies page</h1>
      {moviesArray.map((movie) => {
        return (
        <Link key={movie._id} to={`/movie/${movie._id}`}>
          <MovieCard movie={movie}/>
        </Link>)
      })}
    </div>
  );
}

export default AllMoviesPage;
