import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login({ setLogueado }) {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();
  function ingresar(event) {
    event.preventDefault();
    if (usuario === "admin" && password === "admin") {
      console.log("Login OK");
      setLogueado(true);
      navigate("/actividades");
    } else {
      console.log("Login Incorrecto");
      setMensaje("Login Incorrecto");
    }
  }
  return (
    <form className="login" onSubmit={ingresar}>
      <h2>Ingresar</h2>
      <label htmlFor="usuario">Usuario</label>
      <input
        id="usuario"
        value={usuario}
        onChange={(event) => setUsuario(event.target.value)}
        required
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      <button>Ingresar</button>
      <p role="status">{mensaje}</p>
    </form>
  );
}
