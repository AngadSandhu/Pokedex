import pokemoncardStyles from "./PokemonCard.module.css";

type PokemonCardProps = {
  name: string;
  image: string;
  id?: number;
  types?: string[];
};

const PokemonCard = ({ name, image, id, types }: PokemonCardProps) => {
  const primaryType = types && types.length > 0 ? types[0] : undefined;

  return (
    <div className={pokemoncardStyles.cardWrapper}>
      <article
        className={`${pokemoncardStyles.cardContainer} ${
          primaryType ? pokemoncardStyles[`type_${primaryType}`] : ""
        }`}
      >
        <header className={pokemoncardStyles.cardHeader}>
          <span className={pokemoncardStyles.badge}>
            {id ? `#${String(id).padStart(3, "0")}` : "POKÉMON"}
          </span>
          <h3 className={pokemoncardStyles.name}>{name.toUpperCase()}</h3>
        </header>

        <div className={pokemoncardStyles.imageShell}>
          <div className={pokemoncardStyles.imageGlow} />
          <img
            src={image}
            alt={`${name} artwork`}
            className={pokemoncardStyles.image}
          />
        </div>

        <footer className={pokemoncardStyles.cardFooter}>
          {types && types.length > 0 ? (
            <div className={pokemoncardStyles.typeChips}>
              {types.map((type) => (
                <span
                  key={type}
                  className={`${pokemoncardStyles.typeChip} ${
                    pokemoncardStyles[`type_${type}`]
                  }`}
                >
                  {type.toUpperCase()}
                </span>
              ))}
            </div>
          ) : (
            <p className={pokemoncardStyles.subtitle}>Tap to see full stats</p>
          )}
        </footer>
      </article>
    </div>
  );
};

export default PokemonCard;
