import React, { useEffect, useState } from "react";
import listStyles from "./PokemonList.module.css";
import * as PokemonService from "../../services/PokemonService";
import PokemonTile from "../../components/PokemonTile/PokemonTile";
import ButtonDock from "../../components/ButtonDock/ButtonDock";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const PAGE_SIZE = 20;

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);

    PokemonService.getPokemon(PAGE_SIZE, (page - 1) * PAGE_SIZE)
      .then((response) => {
        if (response && response.data && !cancelled) {
          setPokemonList(response.data.results);
        }
      })
      .finally(() => {
        if (!cancelled) {
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [page]);

  const handlePrev = () => {
    setPage((current) => (current > 1 ? current - 1 : current));
  };

  const handleNext = () => {
    setPage((current) => current + 1);
  };

  return (
    <React.Fragment>
      <ButtonDock
        onPrev={handlePrev}
        onNext={handleNext}
        page={page}
        isLoading={isLoading}
      />
      <div className={listStyles.listContainer}>
        {pokemonList &&
          pokemonList.map((pokemon: any, index: number) => {
            const url: string = pokemon.url || "";
            const match = url.match(/\/pokemon\/(\d+)\//);
            const pokemonId = match ? parseInt(match[1], 10) : index + 1;

            return (
              <PokemonTile
                key={pokemonId}
                id={pokemonId}
                url={pokemon.url}
                name={pokemon.name}
              />
            );
          })}
      </div>
    </React.Fragment>
  );
};

export default PokemonList;
