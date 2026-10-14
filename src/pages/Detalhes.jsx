import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detalhes() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=pt-BR`,
    )
      .then((resposta) => resposta.json())
      .then((dados) => setFilme(dados));
  }, [id]);

  if (!filme) {
    return <h1>Carregando...</h1>;
  }

  return (
    <div className="detalhes">
      <h1>{filme.title}</h1>
      <p className="generos">
        Gêneros: {filme.genres.map((genero) => genero.name).join(", ")}
      </p>
      <p>{filme.overview}</p>
    </div>
  );
}