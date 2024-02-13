import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getPokemon } from "../services/apiPokemon";
import Loading from "../ui/Loading";
import Button from "../ui/Button";
import PokemonDetails from "../features/pokemon/PokemonDetails";

export default function Pokemon() {
  const { name } = useParams();
  const navigate = useNavigate();
  const { isLoading, data: pokemon } = useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => getPokemon(name),
  });

  const goBack = () => navigate(-1);

  if (isLoading) return <Loading />;

  return (
    <div className="mt-16">
      <PokemonDetails pokemon={pokemon} />
      <Button onClick={goBack}>&larr;back</Button>
    </div>
  );
}
