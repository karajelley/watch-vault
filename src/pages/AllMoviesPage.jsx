import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";

function AllMoviesPage({ moviesArray, setMoviesArray, getMovies }) {
  const navigate = useNavigate(); // For navigation
  const [filteredMovies, setFilteredMovies] = useState(moviesArray); // Initialize with moviesArray

  const handleMovieSelect = (movie) => {
    navigate(`/movie/${movie._id}`); // Navigate to the selected movie's page
  };

  const handleSearchInput = (searchText) => {
    if (!searchText.trim()) {
      setFilteredMovies(moviesArray); // Reset to all movies when search is cleared
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

  useEffect(() => {
    // Fetch movies only on component mount
    if (moviesArray.length === 0) {
      getMovies();
    }
  }, [getMovies, moviesArray]);

  useEffect(() => {
    // Synchronize filteredMovies with moviesArray whenever it changes
    setFilteredMovies(moviesArray);
  }, [moviesArray]);

  return (
    <div>
      <h1>all movies page</h1>
      <SearchBar moviesArray={moviesArray} onSearch={handleSearchInput} />
      <button onClick={sortByTomatoes}>SORT BY 🍅</button>
      <button onClick={sortByTitle}>SORT ALPH</button>
      {filteredMovies.map((movie) => (
        <Link key={movie._id} to={`/movie/${movie._id}`}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
}

export default AllMoviesPage;
