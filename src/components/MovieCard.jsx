function MovieCard({ poster, titulo, nota }) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w200${poster}`}
        alt={titulo}
        width="200"
      />
      <h2>{titulo}</h2>
      <p>Nota: {nota}</p>
    </div>
  );
}

export default MovieCard;