import React, { useEffect, useState } from "react";
import listStyles from "./PokemonList.module.css";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    console.log("Fetching List on page init");
  }, []);

  return (
    <div className={listStyles.listContainer}>
      <PokemonCard></PokemonCard>
    </div>
  );
};

export default PokemonList;
