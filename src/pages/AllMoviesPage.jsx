import { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

function AllMoviesPage({ moviesArray, setMoviesArray, getMovies }) {
  function sortByTomatoes() {
    const arrayCopy = [...moviesArray];

    arrayCopy.sort((a, b) => {
      const calA = a.rotten_tomatoes;
      const calB = b.rotten_tomatoes;
      return calB - calA;
    });

    console.log(arrayCopy);
    setMoviesArray(arrayCopy);
  }

  function sortByTitle() {
    const arrayCopy = [...moviesArray];

    arrayCopy.sort((a, b) => {
      a.title.localeCompare(b.title);
      if (a.title < b.title) {
        return -1;
      } else if (a.firstname > b.firstname) {
        return 1;
      }
      return 0;
    });

    console.log(arrayCopy);
    setMoviesArray(arrayCopy);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>all movies page</h1>
      <button onClick={sortByTomatoes}>SORT BY 🍅</button>
      <button onClick={sortByTitle}>SORT ALPH</button>
      {moviesArray.map((movie) => {
        return (
          <Link key={movie._id} to={`/movie/${movie._id}`}>
            <MovieCard movie={movie} />
          </Link>
        );
      })}
    </div>
  );
}

export default AllMoviesPage;
