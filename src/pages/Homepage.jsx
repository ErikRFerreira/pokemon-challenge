import PokemonList from "../features/pokemon/PokemonList";

export default function Homepage() {
  return (
    <div className="pt-10">
      <h1 className="text-2xl">List of Pokemons</h1>
      <PokemonList />
    </div>
  );
}
