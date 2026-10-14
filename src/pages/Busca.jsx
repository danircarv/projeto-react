import { useState } from "react";


export default function Busca() {
  const [busca, setBusca] = useState("");
  const [filmes, setFilmes] = useState([]);

  // usando o link da documentação https://developer.themoviedb.org/reference/search-movie
  function buscarFilmes(evento) {
    evento.preventDefault();

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=pt-BR&query=${busca}`,
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

      {filmes.map((filme) => (
        <h2 key={filme.id}>{filme.title}</h2>
      ))}
    </div>
  );
}