import React, { useEffect, useState } from "react";
import listStyles from "./PokemonList.module.css";
import * as PokemonService from "../../services/PokemonService";
import PokemonTile from "../../components/PokemonTile/PokemonTile";
import ButtonDock from "../../components/ButtonDock/ButtonDock";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    PokemonService.getPokemon(50, 0).then((response) => {
      if (response && response?.data) {
        setPokemonList(response?.data?.results);
      }
    });
  }, []);

  return (
    <React.Fragment>
      <div>Button controls go here</div>
      <ButtonDock></ButtonDock>
      <div className={listStyles.listContainer}>
        {pokemonList &&
          pokemonList.map((pokemon: any, id: number) => (
            <PokemonTile
              key={id}
              id={id}
              url={pokemon.url}
              name={pokemon.name}
            />
          ))}
      </div>
    </React.Fragment>
  );
};

export default PokemonList;
