import { useState, useEffect } from "react";
import PokeCard from "@/components/PokeCard";
export default function Poke() {
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchAllPokemons() {
      try {
        const lista = [];
        for (let id = 1; id <= 20; id++) {
          const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon/" + id + "/",
          );
          if (!response.ok) throw new Error("Error al cargar Pokémon");
          lista.push(await response.json());
        }
        setPokemons(lista);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchAllPokemons();
  }, []);
  return (
    <>
      <h2>Primeros 20 Pokémon</h2>
      <p role="status">{error}</p>
      {pokemons.length === 0 && !error && <p>Cargando...</p>}
      <div className="cards">
        {pokemons.map((pokemon) => (
          <PokeCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
