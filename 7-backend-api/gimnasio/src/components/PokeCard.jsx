export default function PokeCard({ pokemon }) {
  return (
    <article className="card">
      <h3>{pokemon.name}</h3>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Número: {pokemon.id}</p>
      <p>Altura: {pokemon.height / 10} m</p>
      <p>Peso: {pokemon.weight / 10} kg</p>
      <p>Tipos: {pokemon.types.map((tipo) => tipo.type.name).join(", ")}</p>
    </article>
  );
}
