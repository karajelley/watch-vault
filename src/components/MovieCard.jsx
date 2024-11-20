function MovieCard({ movie }) {
  return (
    <div key={movie._id} className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <p>{movie.title}</p>
      <p>{movie.rotten_tomatoes}</p>
      <p>{movie.audience_rating}</p>
    </div>
  );
}

export default MovieCard;
