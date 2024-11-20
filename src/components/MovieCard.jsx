import "./MovieCard.css"

function MovieCard({ movie }) {
  return (
    <div key={movie._id} className="movie-card">
      <img src={movie.image} alt={movie.title} className={`movie-img ${movie.title}`} />
      <h3>{movie.title.toUpperCase()}</h3>
      <p>Rotten tomatoes: {movie.rotten_tomatoes}%</p>
    </div>
  );
}

export default MovieCard;

