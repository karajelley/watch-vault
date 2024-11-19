import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

function SearchBar({ moviesArray, onSearch }) {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchText(query);

    onSearch(query);

    if (query.trim() === "") {
      setSuggestions([]); 
      return;
    }

    const filteredMovies = moviesArray.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );

    setSuggestions(filteredMovies.slice(0, 5)); 
  };

  const handleSuggestionClick = (movie) => {
    navigate(`/movie/${movie._id}`); 
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchText}
        onChange={handleInputChange}
        className="search-bar-input"
      />
      {suggestions.length > 0 && (
        <ul className="search-bar-suggestions">
          {suggestions.map((movie) => (
            <li
              key={movie._id}
              onClick={() => handleSuggestionClick(movie)}
              className="search-bar-suggestion-item"
            >
              {movie.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
