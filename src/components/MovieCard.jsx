import { useState } from "react";
import { Link } from "react-router-dom";

function MovieCard({ id, poster, titulo, nota, aoAlterarFavorito }) {
  const [favoritos, setFavoritos] = useState(
    JSON.parse(localStorage.getItem("favoritos")) || [],
  );
  const favorito = favoritos.some((filme) => filme.id === id);

  function alternarFavorito() {
    if (favorito) {
      const novaLista = favoritos.filter((filme) => filme.id !== id);
      setFavoritos(novaLista);
      localStorage.setItem("favoritos", JSON.stringify(novaLista));
      aoAlterarFavorito?.(id);
    } else {
      const novaLista = [...favoritos, { id, poster, titulo, nota }];
      setFavoritos(novaLista);
      localStorage.setItem("favoritos", JSON.stringify(novaLista));
    }
  }

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
      <button onClick={alternarFavorito}>
        {favorito ? "Desfavoritar" : "Favoritar"}
      </button>
    </div>
  );
}

export default MovieCard;