import axios from "axios";

const getPokemon = (offset: Number) => {
  return axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=100&offset=" + offset
  );
};

const getPokemonByType = (number: Number) => {
  return axios.get("https://pokeapi.co/api/v2/type/" + number);
};

const getPokemonDetails = (id: string | number) => {
  return axios.get("https://pokeapi.co/api/v2/pokemon/" + id);
};

export { getPokemon, getPokemonByType, getPokemonDetails };
