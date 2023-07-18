import { useEffect } from "react";
import pokemoncardStyles from "./PokemonCard.module.css";

const PokemonCard = (props: any) => {
  useEffect(() => {}, []);
  return (
    <div>
      <div className={pokemoncardStyles.cardContainer}>
        <div className={pokemoncardStyles.imageDetails}>
          <img src={props.image} alt="Pokemon Image" />
        </div>
        <div className={pokemoncardStyles.cardDetails}>
          <h3>Squirtle</h3>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
