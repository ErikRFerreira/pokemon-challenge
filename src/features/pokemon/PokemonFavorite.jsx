import { Link } from "react-router-dom";

export default function PokemonFavorite({ pokemon }) {
  const { name, imageUrl } = pokemon;

  return (
    <Link to={`/pokemon/${name}`}>
      <div className="border-2 w-full border-stone-200 bg-white flex items-center flex-col px-6 py-4 rounded-lg">
        <p className="capitalize text-lg">{name}</p>
        <img className="w-10 h-10" src={imageUrl} alt={name} />
      </div>
    </Link>
  );
}
