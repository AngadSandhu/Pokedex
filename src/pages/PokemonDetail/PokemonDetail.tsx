import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import componentStyles from "./PokemonDetail.module.css";
import { getPokemonDetails } from "../../services/PokemonService";
import PokemonDetailModel from "../../models/PokemonDetailModel";

const PokemonDetail = (props: any) => {
  const [details, setDetails] = useState<PokemonDetailModel>();
  const routeParams = useParams();
  useEffect(() => {
    getPokemonDetails(25).then((response) => {
      console.log(response.data);
      let data: PokemonDetailModel = response.data;
      setDetails(data);
    });
  }, []);
  return (
    <div className={componentStyles.layout}>
      <div className={componentStyles.imageHolder}>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png" />
      </div>
      <div className={componentStyles.details}>
        <h1>{details?.name ? details.name.toUpperCase() : null}</h1>
      </div>
    </div>
  );
};

export default PokemonDetail;