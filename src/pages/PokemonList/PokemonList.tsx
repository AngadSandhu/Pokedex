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
    <div className={listStyles.page}>
      <div className={listStyles.inner}>
        <div className={listStyles.header}>
          <div className={listStyles.titleBlock}>
            <h1>Pok&eacute;dex</h1>
            <p>
              Browse the roster. Tap a Pok&eacute;mon tile to dive into its stats.
            </p>
          </div>
          <div className={listStyles.pagePill}>Page {page}</div>
        </div>

        <div className={listStyles.controlsRow}>
          <span className={listStyles.hint}>
            Use the controls to flip through the generations.
          </span>
          <ButtonDock
            onPrev={handlePrev}
            onNext={handleNext}
            page={page}
            isLoading={isLoading}
          />
        </div>

        <div className={listStyles.listShell}>
          {isLoading && (
            <div className={listStyles.loadingOverlay}>Loading Pok&eacute;mon...</div>
          )}
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
            {!isLoading && pokemonList && pokemonList.length === 0 && (
              <div className={listStyles.emptyState}>No Pok&eacute;mon found.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
