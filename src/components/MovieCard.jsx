import { Link } from "react-router-dom";

function MovieCard({ id, poster, titulo, nota }) {
  return (
    <div>
      <Link to={`/filme/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w200${poster}`}
          alt={titulo}
          width="200"
        />
        <h2>{titulo}</h2>
      </Link>
      <p>Nota: {nota}</p>
    </div>
  );
}

export default MovieCard;