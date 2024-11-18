import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditPage({moviesArray, setMoviesArray}) {
    const [title, setTitle] = useState(moviesArray.title);
   //genres
    const [action, setAction] = useState(moviesArray.action);
    const [comedy, setComedy] = useState(moviesArray.comedy);
    const [drama, setDrama] = useState(moviesArray.drama);
    const [romance, setromance] = useState(moviesArray.romance);
    const [thriller, setThriller] = useState(moviesArray.thriller);

    const [action, setAction] = useState(moviesArray.action);



    return (
        <>
            <Form>
                <div>
                        <label htmlFor="title">Movie Title</label>
                        <input
                        value={title}
                        type="text"
                        id="title"
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                        />
                </div>
                <div>
                    <fieldset>
                        <legend>Genres</legend>
                            <label>
                                <input type="checkbox" name="genre" value="action">Action</input>
                            </label>
                            <label>
                                <input type="checkbox" name="genre" value={comedy} onchange= {setComedy(e.target.value)}>Action</input>
                            </label>
                            <label>
                                <input type="checkbox" name="genre" value="drama">Drama</input>
                            </label>
                    </fieldset>
                </div>
            </Form>
            
        </>
    )
}

export default EditPage