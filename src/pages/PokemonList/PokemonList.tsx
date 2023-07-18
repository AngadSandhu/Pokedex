import React, { useEffect, useState } from "react";
import listStyles from "./PokemonList.module.css";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import * as PokemonService from "../../services/Pokemon";
import PokemonCardInterface from "../../models/PokemonCard";

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
        pokemonList.map((pokemon, id) => <PokemonCard key={id} />)}
    </div>
  );
};

export default PokemonList;
