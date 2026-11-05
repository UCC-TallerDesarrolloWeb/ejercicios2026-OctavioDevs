import { Link } from "react-router-dom";
export default function Header({ logueado, setLogueado }) {
  return (
    <header>
      <h1>Gimnasio UCC</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/actividades">Actividades</Link>
        <Link to="/tienda">Tienda</Link>
        <Link to="/carrito">Carrito</Link>
        <Link to="/poke-basico">Bulbasaur</Link>
        <Link to="/poke">Pokémon</Link>
        {logueado && <button onClick={() => setLogueado(false)}>Logout</button>}
      </nav>
    </header>
  );
}
