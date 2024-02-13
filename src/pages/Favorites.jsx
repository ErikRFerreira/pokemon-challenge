import PokemonFavorite from "../features/pokemon/PokemonFavorite";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Favorites() {
  const [favorites] = useLocalStorage([], "favorite_pokemons");

  if (!favorites.length)
    return (
      <div className="text-center text-2xl mt-40">
        You dont have any favorites
      </div>
    );

  return (
    <div className="pt-10">
      <h1 className="text-2xl">My Favorite Pokemons</h1>
      <div className="mt-6 grid gap-2 grid-cols-1 sm:grid-cols-4 md:grid-cols-6">
        {favorites.map((pokemon) => (
          <PokemonFavorite key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
