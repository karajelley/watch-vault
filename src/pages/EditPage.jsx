import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../supabase/config";
import "./EditPage.css";

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

const genresArray = ["Action", "Comedy", "Drama", "Romance", "Thriller"];

function EditPage({ moviesArray, setMoviesArray, changesDiscarded }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);

  const handleOnChange = (e) => {
    const { type, value, name, checked } = e.target;

    if (type === "checkbox" && name === "genre") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        genre: checked
          ? [...(prevFormData.genre || []), value]
          : (prevFormData.genre || []).filter((genre) => genre !== value),
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("moviesdb")
      .update(formData)
      .eq("_id", id)
      .select();

    if (error) {
      console.error("Error updating movie:", error);
    } else if (data && data.length > 0) {
      {
        /*setMoviesArray((prevMovies) =>
        prevMovies.map((movie) => (movie._id === id ? data[0] : movie))
      );*/
      }
      navigate(`/movie/${id}`);
    } else {
      console.error("No data returned from update operation.");
    }
  };

  if (!formData) return <div>Loading...</div>;
  useEffect(() => {
    const movieToEdit = moviesArray.find((movie) => movie._id === id);
    if (movieToEdit) {
      setFormData(movieToEdit);
    }
  }, [id, moviesArray]);

  return (
    <section className="edit-movie-section">
      <div className="back-button-link">
        <button className="back-button" onClick={changesDiscarded}>
          ←
        </button>
      </div>
      <div className="edit-movie-header">
        <h2>Edit Movie</h2>
        <div className="right-header">
          <button className="cancel-button" onClick={changesDiscarded}>
            Cancel
          </button>
          <button className="edit-button" type="submit" form="edit-form">
            Save
          </button>
        </div>
      </div>
      <div className="edit-movie-body">
        <div className="edit-left-side-content">
          <form id="edit-form" onSubmit={handleSubmit}>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title || ""}
              onChange={handleOnChange}
            />

            <label htmlFor="watched">
              Watched:
              <input
                type="checkbox"
                name="watched"
                value={formData.watched || ""}
                onChange={handleOnChange}
              />
            </label>

            <label htmlFor="release_date">Release Date:</label>
            <input
              type="date"
              name="release_date"
              value={formData.release_date || ""}
              onChange={handleOnChange}
            />

            <div className="input-group">
              <label htmlFor="rotten_tomatoes">
                🍅 Rotten Tomatoes:
                <input
                  className="input-group-label"
                  type="number"
                  name="rotten_tomatoes"
                  value={formData.rotten_tomatoes || ""}
                  onChange={handleOnChange}
                />
              </label>

              <label htmlFor="audience_rating">
                ⭐️ Audience Rating:
                <input
                  className="input-group-label"
                  type="number"
                  name="audience_rating"
                  value={formData.audience_rating || ""}
                  onChange={handleOnChange}
                />
              </label>
            </div>

            <legend>🎭 Genre:</legend>
            <div className="genre-checkboxes">
              {genresArray.map((genre, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    name="genre"
                    value={genre}
                    checked={formData.genre?.includes(genre) || false}
                    onChange={handleOnChange}
                  />
                  {genre}
                </label>
              ))}
            </div>

            <label htmlFor="description">Description:</label>
            <textarea
              name="description"
              id="description"
              value={formData.description || ""}
              onChange={handleOnChange}
              rows="8"
              cols="50"
            />

            <label htmlFor="image">Image:</label>
            <input
              type="text"
              name="image"
              value={formData.image || ""}
              onChange={handleOnChange}
            />

            {/* <button type="submit">Save Changes</button> */}
          </form>
        </div>
        <div className="edit-right-side-content">
          <img src={formData.image} alt={formData.title} />
        </div>
      </div>
    </section>
  );
}

export default EditPage;
