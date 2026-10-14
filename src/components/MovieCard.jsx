import { Link } from "react-router-dom";
// usei a documentação pra trazer essa imagem como diz aqui https://developer.themoviedb.org/docs/image-basics
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