import { Link } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function PokemonItem({ pokemon }) {
  const { name, imageUrl } = pokemon;
  const [favorites] = useLocalStorage([], "favorite_pokemons");

  // check if this pokemon is a favorite
  const isFavorite = favorites.some((fav) => fav.name === name);

  return (
    <Link to={`/pokemon/${name}`}>
      <div className="my-4 border-2 border-stone-200 bg-white flex justify-between items-center px-6 py-4 rounded-lg">
        <div className="flex gap-2 items-center">
          <p className="capitalize text-xl">{name}</p>
          <span className="text-2xl">
            {isFavorite ? <>&#9733;</> : <>&#9734;</>}
          </span>
        </div>
        <img className="w-10 h-10" src={imageUrl} alt={name} />
      </div>
    </Link>
  );
}
