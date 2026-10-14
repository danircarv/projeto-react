import { useState } from "react";
import { Link } from "react-router-dom";

function MovieCard({ id, poster, titulo, nota }) {
  const [favorito, setFavorito] = useState(false);

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
      <button onClick={() => setFavorito(!favorito)}>
        {favorito ? "Desfavoritar" : "Favoritar"}
      </button>
    </div>
  );
}

export default MovieCard;