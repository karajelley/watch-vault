import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard.jsx";
import { Link, useNavigate } from "react-router-dom";
import Searchbar from "../components/Searchbar.jsx";
import "./AllMoviesPage.css";
import leftButton from "../assets/left.svg";
import rightButton from "../assets/right.svg";
import errorSearchImg from "../assets/search-error.png";

function AllMoviesPage({ moviesArray, getMovies }) {
  const navigate = useNavigate();
  const [filteredMovies, setFilteredMovies] = useState(moviesArray || []);
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

  const slideLeft = () => {
    let slider = document.querySelector(".movie-cards-container");
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const slideRight = () => {
    let slider = document.querySelector(".movie-cards-container");
    slider.scrollLeft = slider.scrollLeft + 400;
  };

  useEffect(() => {
    if (!moviesArray || moviesArray.length === 0) {
      getMovies();
    }
  }, [getMovies, moviesArray]);

  useEffect(() => {
    setFilteredMovies(moviesArray);
  }, [moviesArray]);

  return (
    <section className="all-movies-section">
      <Searchbar moviesArray={moviesArray} onSearch={handleSearchInput} />
      <div className="btns-div">
        <button
          className="primary-button"
          onClick={() => navigate("/newmovie")}
        >
          New Movie +
        </button>
        <button onClick={sortByTomatoes} className="sort-btn">
          Sort By Tomatoes
        </button>
        <button onClick={sortByTitle} className="sort-btn">
          Sort By Title
        </button>

        <fieldset className="fieldset">
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
      </div>
      <section className="scroll-container">
        {(filteredMovies?.length ?? 0 ) === 0 ? (
          <img
            src={errorSearchImg}
            alt="error search image"
            className="search-error-img"
          />
        ) : (
          <>
            <button className="scroll-btn left" onClick={slideLeft}>
              <img src={leftButton} alt="left scroll button" />
            </button>
            <div className="movie-cards-container">
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
            </div>
            <button className="scroll-btn right" onClick={slideRight}>
              <img src={rightButton} alt="right scroll button" />
            </button>
          </>
        )}
      </section>
    </section>
  );
}

export default AllMoviesPage;
