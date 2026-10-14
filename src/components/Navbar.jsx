import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <nav>
        <NavLink to="/" end>
          Início
        </NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        <NavLink to="/busca">Busca</NavLink>
        <NavLink to="/favoritos">Favoritos</NavLink>
      </nav>
    </header>
  );
}
