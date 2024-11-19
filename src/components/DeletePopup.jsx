import './DeletePopup.css';

function DeletePopup({movie, deleteItem, hidePopup}) {

    return (
        <div>
            <div className="popup-overlay">
                <div className="popup-background" onClick={hidePopup}></div> {/* Semi-transparent background*/}
                <div className="popup-container">
                    <div className="popup-elements">

                        <p>Are you sure you want to delete?</p>
                        <div className="movie-title-div">
                            <h4>{movie.title}</h4>
                            <img className="delete-popup-image" src={movie.image} alt="" />
                        </div>
                    </div>
                    <div className="popup-buttons">
                        <button className="cancel-button" onClick={hidePopup}>
                            Cancel
                        </button>
                        <button className="delete-button-popup" onClick={() => {
                                deleteItem(movie._id);
                            }}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeletePopup