import { useEffect, useState } from "react";

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=pt-BR`,
    )
      .then((resposta) => resposta.json())
      .then((dados) => {
        setFilmes(dados.results);
        setCarregando(false);
      })
      .catch(() => {
        setCarregando(false);
      });
  }, []);

  if (carregando) {
    return <h1>Carregando...</h1>;
  }

  return (
    <div>
      <h1>Filmes populares</h1>

      {filmes.map((filme) => (
        <div key={filme.id}>
          <h2>{filme.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default Home;
