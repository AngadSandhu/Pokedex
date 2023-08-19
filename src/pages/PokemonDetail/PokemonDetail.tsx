import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import componentStyles from "./PokemonDetail.module.css";
import { getPokemonDetails } from "../../services/PokemonService";
import PokemonDetailModel from "../../models/PokemonDetailModel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWeightScale } from "@fortawesome/free-solid-svg-icons";
import { faRulerVertical } from "@fortawesome/free-solid-svg-icons";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faFan } from "@fortawesome/free-solid-svg-icons";
import { faShieldCat } from "@fortawesome/free-solid-svg-icons";
import { faGaugeHigh } from "@fortawesome/free-solid-svg-icons";
import { faChessKing } from "@fortawesome/free-solid-svg-icons";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const icons = [faBolt, faFan, faShield, faChessKing, faShieldCat, faGaugeHigh];
const HEIGHT = "Metres";
const WEIGHT = "Kilograms";

const PokemonDetail = () => {
  const [details, setDetails] = useState<PokemonDetailModel>();
  const [statsMap, setStatsMap] = useState<any>({});
  const navigate = useNavigate();
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

  const backToList = useCallback(() => {
    navigate("/pokemon");
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
    <React.Fragment>
      <button type="button" className="btn btn-light" onClick={backToList}>
        <FontAwesomeIcon icon={faCaretLeft} /> Back to List
      </button>
      <hr />
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
                  <div>
                    <FontAwesomeIcon icon={icons[i]} /> {key.toUpperCase()}
                  </div>
                  <div>{statsMap[key]}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PokemonDetail;
