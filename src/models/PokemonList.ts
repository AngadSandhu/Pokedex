import PokemonCardInterface from "./PokemonCard";

export default interface PokemonListInterface {
  count: number;
  next: string;
  previous: string;
  results: Array<PokemonCardInterface>;
}
