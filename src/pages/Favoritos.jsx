import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const filmesSalvos = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(filmesSalvos);
  }, []);

  function removerFavorito(id) {
    setFavoritos(favoritos.filter((filme) => filme.id !== id));
  }

  return (
    <div>
      <h1>Favoritos</h1>

      {favoritos.map((filme) => (
        <MovieCard
          key={filme.id}
          id={filme.id}
          poster={filme.poster}
          titulo={filme.titulo}
          nota={filme.nota}
          aoAlterarFavorito={removerFavorito}
        />
      ))}
    </div>
  );
}