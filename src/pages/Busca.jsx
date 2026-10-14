import { useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Busca() {
  const [busca, setBusca] = useState("");
  const [filmes, setFilmes] = useState([]);
  const [erro, setErro] = useState("");

  // usando o link da documentação https://developer.themoviedb.org/reference/search-movie
  function buscarFilmes(evento) {
    evento.preventDefault();
    const textoBusca = busca.trim();

    if (!textoBusca) {
      setErro("Digite o nome de um filme.");
      setFilmes([]);
      return;
    }

    setErro("");

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=pt-BR&query=${textoBusca}`,
    )
      .then((resposta) => resposta.json())
      .then((dados) => setFilmes(dados.results));
  }

  return (
    <div className="busca">
      <h1>Busca</h1>

      <form onSubmit={buscarFilmes}>
        <input
          type="text"
          value={busca}
          onChange={(evento) => setBusca(evento.target.value)}
          placeholder="Digite o nome do filme"
        />
        <button type="submit">Buscar</button>
      </form>

      {erro && <p role="alert">{erro}</p>}

      {filmes.map((filme) => (
        <MovieCard
          key={filme.id}
          id={filme.id}
          poster={filme.poster_path}
          titulo={filme.title}
          nota={filme.vote_average}
        />
      ))}
    </div>
  );
}