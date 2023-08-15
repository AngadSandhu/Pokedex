import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import componentStyles from "./PokemonDetail.module.css";
import { getPokemonDetails } from "../../services/PokemonService";
import PokemonDetailModel from "../../models/PokemonDetailModel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWeightScale } from "@fortawesome/free-solid-svg-icons";
import { faRulerVertical } from "@fortawesome/free-solid-svg-icons";

interface PropTypes {
  url: String;
}

interface PokemonStats {
  hp: String;
  attack: String;
  defense: String;
  specialAttack: String;
  specialDefense: String;
  speed: number;
}

const HEIGHT = "Metres";
const WEIGHT = "Kilograms";

const PokemonDetail = () => {
  const [details, setDetails] = useState<PokemonDetailModel>();
  const [statsMap, setStatsMap] = useState<{}>({});
  const routeParams = useParams();

  const pokemonStats = useCallback((stats: any) => {
    const statsMap = new Map();
    stats?.forEach((statDetails: any, i: number) => {
      let keyName = statDetails.stat?.name,
        value = statDetails.base_stat;
      statsMap.set(keyName, value);
      console.log(statsMap);
      setStatsMap(Object.fromEntries(statsMap));
    });
  }, []);

  useEffect(() => {
    if (routeParams.id) {
      getPokemonDetails(routeParams?.id).then((response) => {
        console.log(response.data, routeParams);
        let data: PokemonDetailModel = response.data;
        pokemonStats(data?.stats);
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
          <h2>{details?.name ? details.name.toUpperCase() : null}</h2>
          <hr />
          <div className={componentStyles.rowContent}>
            <div>
              <FontAwesomeIcon icon={faWeightScale} /> Weight
            </div>
            <div>
              {details?.weight ? details.weight / 10 : null} {WEIGHT}
            </div>
          </div>
          <div className={componentStyles.rowContent}>
            <div>
              <FontAwesomeIcon icon={faRulerVertical} /> Height
            </div>
            <div>
              {details?.height ? details.height / 10 : null} {HEIGHT}{" "}
            </div>
          </div>
          <br />
          <p>STATS</p>
          {Object.keys(statsMap).length > 0 &&
            Object.keys(statsMap).map((key: any, i) => (
              <div key={i} className={componentStyles.rowContent}>
                <div>{key}</div>
                <div></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
