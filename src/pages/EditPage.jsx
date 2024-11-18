import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditPage({moviesArray, setMoviesArray}) {

    



    return (
        <>
           {/*  <section className="new-movie-section">
                <div className="new-movie-header">
                    <button>back</button>
                    <h2>Edit {moviesArray.title}</h2>
                    <button type="submit" form="create-form">
                    save
                    </button>
                </div>

                <form id="create-form" onSubmit={handleSubmit}>
                    <div className="form-div title">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleOnChange}
                    />
                    </div>
                    <fieldset>
                    <legend>Genre:</legend>
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
                    </fieldset>
                    <div className="form-div release">
                    <label htmlFor="release_date">Release Date:</label>
                    <input
                        type="date"
                        id="release_date"
                        value={formData.release_date}
                        onChange={handleOnChange}
                    />
                    </div>
                    <div className="form-div rotten-tomatoes">
                    <label htmlFor="rating">Rotten Tomatoes:</label>
                    <input
                        type="number"
                        id="rotten_tomatoes"
                        value={formData.rotten_tomatoes}
                        onChange={handleOnChange}
                    />
                    </div>
                    <div className="form-div rotten-tomatoes">
                    <label htmlFor="rating">Audience Rating:</label>
                    <input
                        type="number"
                        id="audience_rating"
                        value={formData.audience_rating}
                        onChange={handleOnChange}
                    />
                    </div>
                    <div className="form-div watched">
                    <label htmlFor="watched">Watched:</label>
                    <input
                        type="text"
                        id="watched"
                        value={formData.watched}
                        onChange={handleOnChange}
                    />
                    </div>
                    <div className="form-div description">
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        value={formData.description}
                        onChange={handleOnChange}
                    />
                    </div>
                    <div className="form-div image">
                    <label htmlFor="image">Image:</label>
                    <input
                        type="text"
                        id="image"
                        value={formData.image}
                        onChange={handleOnChange}
                    />
                    </div>
                </form>
            </section>   */}
        </>
    )
}

export default EditPage