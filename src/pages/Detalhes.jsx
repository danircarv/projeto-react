import { useParams } from "react-router-dom";

export default function Detalhes() {
  const { id } = useParams();

  return (
    <>
      <h1>Detalhes</h1>
      <p>ID do filme: {id}</p>
    </>
  );
}