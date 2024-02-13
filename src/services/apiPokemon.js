const API_URL = "https://pokeapi.co/api/v2";

export async function getPokemons(page) {
  const offset = page === 1 ? 0 : (page - 1) * 10;

  const getData = await fetch(`${API_URL}/pokemon?limit=10&offset=${offset}`);

  if (!getData.ok) throw Error("Couldn't load any data :(");

  const { results } = await getData.json();

  const updatedResults = results.map((item, i = 1) => {
    const itemIndex = i + 1 + offset;
    item.imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${itemIndex}.png`;
    return item;
  });

  return updatedResults;
}

export async function getPokemon(name) {
  const getData = await fetch(`${API_URL}/pokemon/${name}`);

  if (!getData.ok) throw Error("Couldn't load any data :(");

  const result = await getData.json();

  return result;
}
