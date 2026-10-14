import { useEffect, useState } from "react";

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=pt-BR`,
    )
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error("Erro ao buscar filmes");
        }

        return resposta.json();
      })
      .then((dados) => {
        setFilmes(dados.results);
        setCarregando(false);
      })
      .catch(() => {
        setErro(true);
        setCarregando(false);
      });
  }, []);

  if (carregando) {
    return <h1>Carregando...</h1>;
  }

  if (erro) {
    return <h1>Erro ao carregar os filmes.</h1>;
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
