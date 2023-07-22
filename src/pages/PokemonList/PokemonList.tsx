import React, { useEffect, useState } from "react";
import listStyles from "./PokemonList.module.css";
import * as PokemonService from "../../services/Pokemon";
import PokemonTile from "../../components/PokemonTile/PokemonTile";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    PokemonService.getPokemon(0).then((response) => {
      if (response && response?.data) {
        setPokemonList(response?.data?.results);
      }
    });
  }, []);

  return (
    <div className={listStyles.listContainer}>
      {pokemonList &&
        pokemonList.map((pokemon: any, id: number) => (
          <PokemonTile key={id} image={pokemon.url} name={pokemon.name} />
        ))}
    </div>
  );
};

export default PokemonList;
