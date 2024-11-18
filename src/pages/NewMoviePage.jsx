import { useState } from "react";
import supabase from "../supabase/config";

const initialFormData = {
    title: "",
    genre: "",
    rating: 0,
    watched: false,
    description: "",
    image: "",
};

function NewMoviePage({ moviesArray, setMoviesArray }) {



  return (
    <section className="new-movie-section">
      <div className="new-movie-header">
        <button>back</button>
        <h2>Add Movie</h2>
        <button type="submit" form="create-form">
          save
        </button>
      </div>

      <form id="create-form">
        <label htmlFor="title">Title:</label>
        <input type="text"
                id="title"
                value={title}
                onChange={handleOnchange} />
        <label htmlFor="genre">Genre:</label>
        <input type="text" value={genre} />
        <label htmlFor="rating">Rating:</label>
        <input type="number" value={rating} />
        <label htmlFor="watched">Watched:</label>
        <input type="checkbox" value={watched} />
        {/* <label htmlFor="lists">Lists:</label>
        <input type="text" /> WHAT KIND OF VALUE IS THIS??? */}
        <label htmlFor="description">Description:</label>
        <input type="text" value={description} />
        <label htmlFor="image-url">Image:</label>
        <input type="text" value={image - url} />
      </form>
    </section>
  );
}

export default NewMoviePage;
