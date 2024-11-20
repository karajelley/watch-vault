import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard.jsx";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../components/Searchbar.jsx";

function AllMoviesPage({ moviesArray, setMoviesArray, getMovies }) {
  const navigate = useNavigate();
  const [filteredMovies, setFilteredMovies] = useState(moviesArray);
  const [watched, setWatched] = useState(null);

  // const handleMovieSelect = (movie) => {
  //   navigate(`/movie/${movie._id}`);
  // };

  const handleSearchInput = (searchText) => {
    if (!searchText.trim()) {
      setFilteredMovies(moviesArray);
    } else {
      const filtered = moviesArray.filter((movie) =>
        movie.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  };

  const sortByTomatoes = () => {
    const arrayCopy = [...filteredMovies];
    arrayCopy.sort((a, b) => b.rotten_tomatoes - a.rotten_tomatoes);
    setFilteredMovies(arrayCopy);
  };

  const sortByTitle = () => {
    const arrayCopy = [...filteredMovies];
    arrayCopy.sort((a, b) => a.title.localeCompare(b.title));
    setFilteredMovies(arrayCopy);
  };

  // const handleWatched = () => {
  //   setWatched(!watched);
  //   console.log(watched);
  // };

  useEffect(() => {
    if (moviesArray.length === 0) {
      getMovies();
    }
  }, [getMovies, moviesArray]);

  useEffect(() => {
    setFilteredMovies(moviesArray);
  }, [moviesArray]);

  return (
    <div>
      <h1>all movies page</h1>
      <SearchBar moviesArray={moviesArray} onSearch={handleSearchInput} />
      <button onClick={() => navigate("/newmovie")}>Add New Movie</button>
      <button onClick={sortByTomatoes}>SORT BY 🍅</button>
      <button onClick={sortByTitle}>SORT ALPH</button>
      <fieldset>
        <input type="radio" id="all" name="watched" onClick={()=>{setWatched(null)}}/>
        <label htmlFor="all">All</label>

        <input type="radio" id="watched" name="watched" onClick={()=>{setWatched(true)}}/>
        <label htmlFor="watched">Watched</label>

        <input type="radio" id="unwatched" name="watched" onClick={()=>{setWatched(false)}}/>
        <label htmlFor="unwatched">Unwatched</label>
      </fieldset>

      {watched === null ? (
        filteredMovies.map((movie) => (
          <Link key={movie._id} to={`/movie/${movie._id}`}>
            <MovieCard movie={movie} />
          </Link>
        ))
      ) : watched ? (
        <h1>true</h1>
      ) : (
        <h1>false</h1>
      )}
    </div>
  );
}

export default AllMoviesPage;
