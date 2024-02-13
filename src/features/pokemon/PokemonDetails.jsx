import useLocalStorage from "../../hooks/useLocalStorage";
import FavoriteButton from "../../ui/FavoriteButton";

export default function PokemonDetails({ pokemon }) {
  const [favorites, setFavorite] = useLocalStorage([], "favorite_pokemons");
  const { name, sprites, base_experience, height, weight, stats } = pokemon;

  // check if this pokemon is a favorite
  const isFavorite = favorites.some((fav) => fav.name === name);

  function toggleFavorite() {
    if (isFavorite) {
      // remove from favorites
      setFavorite(favorites.filter((pokemon) => pokemon.name !== name));
    } else {
      // add to favorites
      const newFavorite = { name, imageUrl: sprites.front_default };
      setFavorite((favorites) => [...favorites, newFavorite]);
    }
  }

  return (
    <div className="mb-4 border-2 border-stone-200 bg-white p-6 rounded-lg">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <h2 className="capitalize text-2xl">{name}</h2>
          <FavoriteButton onClick={toggleFavorite} isFavorite={isFavorite} />
        </div>
        <img src={sprites.front_default} alt={name} />
      </div>
      <ul>
        <li className="mb-1 capitalize">Base experience: {base_experience}</li>
        <li className="mb-1 capitalize">Height: {height}</li>
        <li className="mb-1 capitalize">Weight: {weight}</li>
        {stats.map((stat, i) => (
          <li key={i} className="mb-1 capitalize">
            {stat.stat.name.replace("-", " ")}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}
