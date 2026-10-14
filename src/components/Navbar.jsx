import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      
      <nav>
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/busca">Busca</Link>
        <Link to="/favoritos">Favoritos</Link>
      </nav>
    </header>
  );
}
