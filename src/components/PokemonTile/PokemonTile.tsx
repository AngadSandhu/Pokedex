import { useEffect, useState } from "react";

const styles = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "white",
  width: "10em",
  height: "10em",
  cursor: "pointer",
  borderRadius: "5px",
};

const PokemonTile = (props: any) => {
  return (
    <div>
      <div style={styles}>{props.name && <h3>{props?.name}</h3>}</div>
    </div>
  );
};

export default PokemonTile;
