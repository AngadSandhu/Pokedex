import pokemoncardStyles from "./PokemonCard.module.css";

const PokemonCard = (props: any) => {
  return (
    <div>
      <div className={pokemoncardStyles.cardContainer}>
        <div className={pokemoncardStyles.imageDetails}>
          <img src={props.image} alt="Pkemon Image" />
        </div>
        <div className={pokemoncardStyles.cardDetails}>
          <h3>Squirtle</h3>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
