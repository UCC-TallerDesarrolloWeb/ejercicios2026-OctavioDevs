import Store from "@/pages/Store";
import Cart from "@/pages/Cart";
import Poke from "@/pages/Poke";
import PokeBasico from "@/pages/PokeBasico";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Actividades from "@/pages/Actividades";
export default function App() {
  const [logueado, setLogueado] = useState(false);
  return (
    <Routes>
      <Route element={<Layout logueado={logueado} setLogueado={setLogueado} />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login setLogueado={setLogueado} />} />
        <Route
          path="actividades"
          element={<Actividades logueado={logueado} />}
        />
        <Route path="tienda" element={<Store logueado={logueado} />} />
        <Route path="carrito" element={<Cart logueado={logueado} />} />
        <Route path="poke" element={<Poke />} />
        <Route path="poke-basico" element={<PokeBasico />} />
      </Route>
    </Routes>
  );
}
