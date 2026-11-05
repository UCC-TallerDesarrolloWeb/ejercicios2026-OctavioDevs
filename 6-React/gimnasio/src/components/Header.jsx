import { Link } from "react-router-dom";
export default function Header({ logueado, setLogueado }) {
  return (
    <header>
      <h1>Gimnasio UCC</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/actividades">Actividades</Link>
        {logueado && <button onClick={() => setLogueado(false)}>Logout</button>}
      </nav>
    </header>
  );
}
