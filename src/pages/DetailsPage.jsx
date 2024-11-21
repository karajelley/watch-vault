import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import supabase from "../supabase/config";
import DeletePopup from "../components/DeletePopup.jsx";
import { notify } from "../utils/toastUtils.js";
import "./DetailsPage.css";

function DetailsPage({ moviesArray, setMoviesArray }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const movie = moviesArray.find((movieItem) => movieItem._id === id);

  useEffect(() => {
    if (!movie) {
      navigate("*");
    }
  }, [movie, navigate]); 

  if (!movie) {
    return null; 
  }

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const showPopup = () => setIsPopupVisible(true);
  const hidePopup = () => setIsPopupVisible(false);

  async function deleteItem(id) {
    try {
      const resp = await supabase.from("moviesdb").delete().eq("_id", id);
      if (resp.error) {
        throw resp.error;
      }

      setMoviesArray((prevMovies) =>
        prevMovies.filter((movie) => movie._id !== id)
      );

      alert("Item deleted!");
      hidePopup();
      notify("Movie deleted successfully!", { type: "success" });
      navigate("/");
    } catch (err) {
      console.error("There's been an error deleting an item:", err);
    }
  }

  const formattedGenre =
    movie.genre && movie.genre.length > 0 ? movie.genre.join(", ") : "";

  return (
    <>
      {isPopupVisible && (
        <DeletePopup
          deleteItem={deleteItem}
          movie={movie}
          hidePopup={hidePopup}
        />
      )}
      <section className="details-movie-section">
        <Link className="back-button-link" to="/">
          <button className="back-button">←</button>
        </Link>
        <div className="details-movie-header">
          <div className="left-header">
            <h2>{movie.title}</h2>
          </div>
          <div className="right-header">
            <button className="delete-button" onClick={showPopup}>
              Delete
            </button>
            <Link to={`/movie/${id}/editmovie`}>
              <button className="primary-button">Edit</button>
            </Link>
          </div>
        </div>
        <div className="details-movie-body">
          <div className="left-side-content">
            <div className="quick-details">
              <h4>{movie.watched ? "✅ Watched" : "🙈 Unwatched"}</h4>
              <h4>🎭 Genre: {formattedGenre}</h4>
              <h4>🍅 Rotton Tomatoes: {movie.rotten_tomatoes}%</h4>
              <h4>⭐️ Audience Rating: {movie.audience_rating}%</h4>
            </div>

            <div className="description">
              <h4>Description:</h4>
              <p>{movie.description}</p>
            </div>
          </div>
          <div className="right-side-content">
            <img src={movie.image} alt={movie.title} />
          </div>
        </div>
      </section>
    </>
  );
}

export default DetailsPage;
