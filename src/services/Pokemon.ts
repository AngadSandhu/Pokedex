import axios from "axios";

const getPokemon = () => {
  return axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
};

const getPokemonByType = (number: Number) => {
  return axios.get("https://pokeapi.co/api/v2/type/" + number);
};

const getPokemonDetails = (name: String) => {
  return axios.get("https://pokeapi.co/api/v2/pokemon/" + name);
};

module.exports = { getPokemon, getPokemonByType, getPokemonDetails };
