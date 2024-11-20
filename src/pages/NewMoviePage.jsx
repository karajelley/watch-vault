import {useNavigate } from "react-router-dom";
import { useState } from "react";
import { notify } from "../utils/toastUtils";
import supabase from "../supabase/config";
import "./NewMoviePage.css"

const initialFormData = {
  title: "",
  genre: [],
  release_date: "",
  rotten_tomatoes: 0,
  audience_rating: 0,
  watched: false,
  image: "",
  description: "",
};

// THIS MIGHT GO TO USECONTEXT()!!!!
const genresArray = ["Action", "Comedy", "Drama", "Romance", "Thriller"];

function NewMoviePage({changesDiscarded, getMovies}) {
  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate()
  

  function handleOnChange(e) {
    const { type, value, id, checked, name } = e.target;

    // Handle checkboxes separately
    if (type === "checkbox" && name === "genre") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        genre: checked
          ? [...prevFormData.genre, value] // Add to genre array
          : prevFormData.genre.filter((genre) => genre !== value), // Remove from genre array
      }));
    } else {
      setFormData({
        ...formData,
        [id]: value,
      });
    }
  }


  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    supabase
      .from("moviesdb")
      .insert([formData])
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
      notify("Movie created successfully!", { type: "success" });

      await getMovies();
      
      navigate(`/allmovies`);
  }

  return (
    <section className="new-movie-section">
      <div className="back-button-link">
        <button className="back-button" onClick={changesDiscarded}>←</button>
      </div>
      <div className="new-movie-header">
        <h2>New Movie</h2>
        <div className="right-header">
          <button className="cancel-button" onClick={changesDiscarded}>
          Cancel
          </button>
          <button className="edit-button" type="submit" form="create-form">
          Save
          </button>
        </div>
      </div>

      <div className="new-movie-body">
        <div className="new-left-side-content">
          <form id="create-form" onSubmit={handleSubmit}>
        
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleOnChange}
            />
            
            <div className="form-div watched">
              <label htmlFor="watched">Watched:
                <input
                  type="checkbox"
                  id="watched"
                  value={formData.watched}
                  onChange={handleOnChange}
                />
              </label>
            </div>

              <label htmlFor="release_date">Release Date:</label>
              <input
                type="date"
                id="release_date"
                value={formData.release_date}
                onChange={handleOnChange}
              />

            <div className="input-group">
            <div className="form-div rotten-tomatoes">
              <label htmlFor="rating">🍅 Rotten Tomatoes:</label>
              <input
                className="input-group-label"
                type="number"
                id="rotten_tomatoes"
                value={formData.rotten_tomatoes}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-div rotten-tomatoes">
              <label htmlFor="rating">⭐️ Audience Rating:</label>
              <input
                className="input-group-label"
                type="number"
                id="audience_rating"
                value={formData.audience_rating}
                onChange={handleOnChange}
              />
            </div>
            </div>
       

            <legend>🎭 Genre:</legend>
            <div className="genre-checkboxes">
            {genresArray.map((genre, index) => {
              return (
                <label key={index}>
                  <input
                    type="checkbox"
                    name="genre"
                    value={genre}
                    onChange={handleOnChange}
                  />
                  {genre}
                </label>
              );
            })}
            </div>
   
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                id="description"
                value={formData.description}
                onChange={handleOnChange}
              />

              <label htmlFor="image">Image:</label>
              <input
                type="text"
                id="image"
                value={formData.image}
                onChange={handleOnChange}
              />
          </form>
        </div>
        <div className="new-right-side-content">
            {formData.image && (
              <img src={formData.image} alt={formData.title || ''} />
            )}
        </div>
      </div>
    </section>
  );
}

export default NewMoviePage;
