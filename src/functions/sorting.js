// import { useState } from "react";

// export const [filteredMovies, setFilteredMovies] = useState(moviesArray);


// export const handleSearchInput = (searchText) => {
//     if (!searchText.trim()) {
//       setFilteredMovies(moviesArray);
//     } else {
//       const filtered = moviesArray.filter((movie) =>
//         movie.title.toLowerCase().includes(searchText.toLowerCase())
//       );
//       setFilteredMovies(filtered);
//     }
//   };

//  export  const sortByTomatoes = () => {
//     const arrayCopy = [...filteredMovies];
//     arrayCopy.sort((a, b) => b.rotten_tomatoes - a.rotten_tomatoes);
//     setFilteredMovies(arrayCopy);
//   };

//  export  const sortByTitle = () => {
//     const arrayCopy = [...filteredMovies];
//     arrayCopy.sort((a, b) => a.title.localeCompare(b.title));
//     setFilteredMovies(arrayCopy);
//   };

