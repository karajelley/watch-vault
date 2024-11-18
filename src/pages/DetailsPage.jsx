import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import supabase from "../supabase/config";
import { useNavigate } from "react-router-dom";
import deleteIcon from "../assets/delete.svg";
import "./DetailsPage.css"

function DetailsPage({moviesArray}){

   // console.log("this is the array", moviesArray)


    const { id } = useParams();
   // console.log("this is the params id:" , id)

    const movie = moviesArray.find((movieItem) => movieItem._id === id);
    console.log(movie)

    const navigate = useNavigate();
    async function deleteItem(id) {
    try {
      const resp = await supabase.from("moviesdb").delete().eq("_id", id);
      console.log(resp);
      navigate("/allmovies");
    } catch {
      console.log("There's been an error deleting an item:");
    }
  }

    //format the genre array
    const formattedGenre = movie.genre && movie.genre.length > 0 
    ? movie.genre.join(", ") 
    : ""; 

    return (
        <>
            <section className="details-movie-section">
                <div className="details-movie-header">
                    <Link to="/allmovies">
                        <button>back</button>
                    </Link>
                    <h2>{movie.title}</h2>

                </div>
                <div className="left-side-content">

                    <div className="quick-details">
                    <h4>{movie.watched ? '✅ Watched' : '🙈 Unwatched'}</h4>
                    <h4>🎭 Genre: {formattedGenre}</h4>
                    <h4>🍅 Rotton Tomatoes: {movie.rotten_tomatoes}%</h4>
                    <h4>⭐️ Audience Rating: {movie.audience_rating*10}%</h4>
                    </div>

                    <div className="lists">
                        <h4>Lists: </h4>
                    </div>

                    <div className="description">
                        <h4>Description:</h4>
                        <p>{movie.description}</p>
                    </div>

                    <div className="right-side-content">
                        <Link to={`/movie/${id}/editmovie`}>
                        <button
                            onClick={() => {
                                deleteItem(movie._id);
                            }}
                        >
                            <img src={deleteIcon} alt="delete icon" />
                        </button>
                            <button>Edit</button>
                        </Link>

                        <img src={movie.image} alt={movie.title} />
                    </div>
                    
            </div>
            </section>
        </>
    )
}

export default DetailsPage