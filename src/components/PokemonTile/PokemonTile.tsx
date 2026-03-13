import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

const styles: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "white",
  width: "10em",
  height: "10em",
  cursor: "pointer",
  borderRadius: "5px",
  flexFlow: "column",
  fontWeight: "700",
};

type PokemonTileProps = {
  id: number;
  name: string;
  url?: string;
};

const PokemonTile = ({ id, name }: PokemonTileProps) => {
  const navigate = useNavigate();
  const getPokemonDetails = () => {
    navigate(`/pokemon/id=${id}`);
  };
  return (
    <div style={styles} onClick={getPokemonDetails}>
      <div>{name && <p>{name.toUpperCase()}</p>}</div>
      <div>
        <p>{id}</p>
      </div>
    </div>
  );
};

export default memo(PokemonTile);
