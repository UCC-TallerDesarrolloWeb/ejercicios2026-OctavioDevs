import { useState, useEffect } from "react";
import PokeCard from "@/components/PokeCard";
export default function PokeBasico() {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1/")
      .then((response) => {
        if (!response.ok) throw new Error("Error al cargar Pokémon");
        return response.json();
      })
      .then(setPokemon)
      .catch((error) => setError(error.message));
  }, []);
  return (
    <>
      <h2>Bulbasaur</h2>
      <p role="status">{error}</p>
      {pokemon ? <PokeCard pokemon={pokemon} /> : !error && <p>Cargando...</p>}
    </>
  );
}
