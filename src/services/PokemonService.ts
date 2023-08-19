import axios from "axios";

const getPokemon = (limit: Number, offset: Number) => {
  return axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=" + limit + "&offset=" + offset
  );
};

const getPokemonByType = (number: Number) => {
  return axios.get("https://pokeapi.co/api/v2/type/" + number);
};

const getPokemonDetails = (id: string | number) => {
  return axios.get("https://pokeapi.co/api/v2/pokemon/" + id);
};

export { getPokemon, getPokemonByType, getPokemonDetails };
