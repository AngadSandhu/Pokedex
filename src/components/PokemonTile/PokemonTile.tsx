import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const styles = {
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

const PokemonTile = (props: any) => {
  const navigate = useNavigate();
  const getPokemonDetails = () => {
    let id = parseInt(props?.id);
    navigate(`details?id=${id + 1}`);
  };
  return (
    <div style={styles} onClick={() => getPokemonDetails()}>
      <div>{props.name && <p>{props?.name?.toUpperCase()}</p>}</div>
      <div>
        {props?.id && props?.id == 0 ? <p>1</p> : <p>{props?.id + 1}</p>}
      </div>
    </div>
  );
};

export default PokemonTile;
