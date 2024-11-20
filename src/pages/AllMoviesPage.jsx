import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard.jsx";
import { Link, useNavigate } from "react-router-dom";
import Searchbar from "../components/Searchbar.jsx";
import "./AllMoviesPage.css";
import leftButton from "../assets/left.svg";
import rightButton from "../assets/right.svg";

//the way to import functions from external js file
// import {
//   handleSearchInput,
//   sortByTitle,
//   sortByTomatoes,
// } from "../functions/sorting";

function AllMoviesPage({ moviesArray, getMovies }) {
  const navigate = useNavigate();
  const [filteredMovies, setFilteredMovies] = useState(moviesArray);
  const [watched, setWatched] = useState(null);

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

  useEffect(() => {
    if (moviesArray.length === 0) {
      getMovies();
    }
  }, [getMovies, moviesArray]);

  useEffect(() => {
    setFilteredMovies(moviesArray);
  }, [moviesArray]);

  return (
    <section className="all-movies-section">
      <h1>all movies page</h1>
      <Searchbar moviesArray={moviesArray} onSearch={handleSearchInput} />
      <button onClick={() => navigate("/newmovie")}>Add New Movie</button>
      <button onClick={sortByTomatoes}>SORT BY 🍅</button>
      <button onClick={sortByTitle}>SORT ALPH</button>
      <fieldset>
        <input
          type="radio"
          id="all"
          name="watched"
          onClick={() => {
            setWatched(null);
          }}
          defaultChecked
        />
        <label htmlFor="all">All</label>

        <input
          type="radio"
          id="watched"
          name="watched"
          onClick={() => {
            setWatched(true);
          }}
        />
        <label htmlFor="watched">Watched</label>

        <input
          type="radio"
          id="unwatched"
          name="watched"
          onClick={() => {
            setWatched(false);
          }}
        />
        <label htmlFor="unwatched">Unwatched</label>
      </fieldset>
      <div className="movie-cards-container">
        <button className="scroll-btn left">
          <img src={leftButton} alt="left scroll button" />
        </button>
        {watched === null // by default will we this, since "all" is watched === null
          ? filteredMovies.map((movie) => (
              <Link key={movie._id} to={`/movie/${movie._id}`}>
                <MovieCard movie={movie} />
              </Link>
            ))
          : filteredMovies //if watched is not null:
              .filter((movie) => movie.watched === watched) //we first filter movies by watched true or false
              .map(
                (
                  movie //then, render the filtered list
                ) => (
                  <Link key={movie._id} to={`/movie/${movie._id}`}>
                    <MovieCard movie={movie} />
                  </Link>
                )
              )}
        <button className="scroll-btn right">
          <img src={rightButton} alt="right scroll button" />
        </button>
      </div>
    </section>
  );
}

export default AllMoviesPage;
