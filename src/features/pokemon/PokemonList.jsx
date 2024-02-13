import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getPokemons } from "../../services/apiPokemon";
import PokemonItem from "./PokemonItem";
import Button from "../../ui/Button";
import Loading from "../../ui/Loading";

export default function PokemonList() {
  const { page: currentPage = 1 } = useParams();
  const [page, setPage] = useState(currentPage);
  const history = useNavigate();

  const {
    isLoading,
    data: pokemons,
    isPreviousData,
  } = useQuery({
    queryKey: ["pokemons", page],
    queryFn: () => getPokemons(page),
    keepPreviousData: true,
  });

  function loadNextPage() {
    const nextPage = Number(page) + 1;
    setPage(nextPage);
    history(`/pokemons/${nextPage}`);
  }

  function loadPrevPage() {
    const prevPage = Number(page) - 1;
    setPage(prevPage);
    history(`/pokemons/${prevPage}`);
  }

  if (isLoading) return <Loading />;

  return (
    <div className="mt-6">
      {pokemons.map((pokemon) => (
        <PokemonItem key={pokemon.name} pokemon={pokemon} />
      ))}
      <div className="flex justify-between">
        <Button disabled={page === 1 ? true : false} onClick={loadPrevPage}>
          Prev
        </Button>
        <Button disabled={isPreviousData} onClick={loadNextPage}>
          Next
        </Button>
      </div>
    </div>
  );
}
