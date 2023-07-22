import { useEffect, useState } from "react";
import pokemoncardStyles from "./PokemonCard.module.css";

const PokemonCard = (props: any) => {
  const [imageURL, setImageURL] = useState("");
  useEffect(() => {
    console.log("Card Props", props);
    setImageURL(props?.image);
  }, []);

  return (
    <div>
      <div className={pokemoncardStyles.cardContainer}>
        <div className={pokemoncardStyles.imageDetails}>
          <img src={props.image} alt="Pokemon Image" />
        </div>
        <div className={pokemoncardStyles.cardDetails}>
          <h3>{props.name.toUpperCase()}</h3>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
