import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import componentStyles from "./PokemonDetail.module.css";
import { getPokemonDetails } from "../../services/PokemonService";
import PokemonDetailModel from "../../models/PokemonDetailModel";

interface PropTypes {
  url: String;
}

const PokemonDetail = () => {
  const [details, setDetails] = useState<PokemonDetailModel>();
  const routeParams = useParams();
  useEffect(() => {
    if (routeParams.id) {
      getPokemonDetails(routeParams?.id).then((response) => {
        console.log(response.data, routeParams);
        let data: PokemonDetailModel = response.data;
        setDetails(data);
      });
    }
  }, [routeParams.id]);
  return (
    <div className={componentStyles.layout}>
      <div className={componentStyles.imageHolder}>
        {details &&
          details?.sprites &&
          details?.sprites?.other &&
          details?.sprites?.other?.home && (
            <img
              alt="Pokemon Image"
              src={details.sprites.other.home.front_default}
            />
          )}
      </div>
      <div className={componentStyles.details}>
        <div className={componentStyles.pokeCard}>
          <div className={componentStyles.contentBorder}>
            <h2>{details?.name ? details.name.toUpperCase() : null}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
