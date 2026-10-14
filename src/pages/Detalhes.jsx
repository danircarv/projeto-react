import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Detalhes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=pt-BR`,
    )
      .then((resposta) => resposta.json())
      .then((dados) => {
        setFilme(dados);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Carregando detalhes...</p>;
  }

  return (
    <div className="detalhes">
      <button className="botao-voltar" onClick={() => navigate(-1)}>
        Voltar
      </button>
      <h1>{filme.title}</h1>
      <p className="generos">
        Gêneros: {filme.genres.map((genero) => genero.name).join(", ")}
      </p>
      <p>{filme.overview}</p>
    </div>
  );
}