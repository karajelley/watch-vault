import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

function DetailsPage({moviesArray}){
    

   // console.log("this is the array", moviesArray)


    const { id } = useParams();
   // console.log("this is the params id:" , id)

    const movie = moviesArray.find((movieItem) => movieItem._id === id);
    //console.log(movie)

    return (
        <>
            <section className="details-movie-section">
                <div className="details-movie-header">
                    <Link to="/allmovies">
                        <button>back</button>
                    </Link>
                    <h2>{movie.title}</h2>

                    <Link to={`/movie/${id}/editmovie`}>
                        <button>Edit</button>
                    </Link>
                    
            </div>
            </section>
        </>
    )
}

export default DetailsPage



