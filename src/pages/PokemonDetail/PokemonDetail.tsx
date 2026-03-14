import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import componentStyles from "./PokemonDetail.module.css";
import { getPokemonDetails } from "../../services/PokemonService";
import PokemonDetailModel from "../../models/PokemonDetailModel";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
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
import { faStar, faList, faLayerGroup, faWandMagicSparkles, faSortNumericDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const statIcons = [faBolt, faFan, faShield, faChessKing, faShieldCat, faGaugeHigh];
const HEIGHT = "Metres";
const WEIGHT = "Kilograms";

const PokemonDetail = () => {
  const [details, setDetails] = useState<PokemonDetailModel>();
  const [statsMap, setStatsMap] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const routeParams = useParams();

  const pokemonStats = useCallback((stats: any[]) => {
    const statsMapLocal = new Map<string, number>();
    stats?.forEach((statDetails: any) => {
      const keyName = statDetails.stat?.name;
      const value = statDetails.base_stat;
      if (keyName) {
        statsMapLocal.set(keyName, value);
      }
    });
    setStatsMap(Object.fromEntries(statsMapLocal));
  }, []);

  const backToList = useCallback(() => {
    navigate("/pokemon");
  }, [navigate]);

  useEffect(() => {
    if (routeParams.id) {
      setIsLoading(true);
      getPokemonDetails(routeParams?.id).then((response) => {
        let data: PokemonDetailModel = response.data;
        pokemonStats(data?.stats);
        setDetails(data);
        setIsLoading(false);
      });
    }
  }, [pokemonStats, routeParams.id]);

  return (
    <div className={componentStyles.page}>
      <div className={componentStyles.topBar}>
        <button
          type="button"
          className={componentStyles.backButton}
          onClick={backToList}
        >
          <FontAwesomeIcon icon={faCaretLeft} />
          <span>Back to list</span>
        </button>
        {details && (
          <div className={componentStyles.titleMeta}>
            <span className={componentStyles.titleName}>
              {details.name?.toUpperCase()}
            </span>
            <span className={componentStyles.titleId}>
              #{details.id.toString().padStart(3, "0")}
            </span>
          </div>
        )}
      </div>

      <div className={componentStyles.layout}>
        {isLoading && (
          <div className={componentStyles.loadingOverlay}>Loading details...</div>
        )}
        <div className={componentStyles.imageHolder}>
          {details &&
            details?.sprites &&
            details?.sprites?.other &&
            details?.sprites?.other?.home && (
              <PokemonCard
                name={details.name}
                image={details.sprites.other.home.front_default}
                id={details.id}
                types={
                  details.types?.map((t: any) => t?.type?.name).filter(Boolean) ??
                  []
                }
              />
            )}
        </div>
        <div className={componentStyles.details}>
          <div className={componentStyles.pokeCard}>
            <div className={componentStyles.metaGrid}>
              <div className={componentStyles.rowContent}>
                <div className={componentStyles.metricLabel}>
                  <FontAwesomeIcon icon={faWeightScale} /> Weight
                </div>
                <div className={componentStyles.metricValue}>
                  {details?.weight ? details.weight / 10 : "—"} {WEIGHT}
                </div>
              </div>
              <div className={componentStyles.rowContent}>
                <div className={componentStyles.metricLabel}>
                  <FontAwesomeIcon icon={faRulerVertical} /> Height
                </div>
                <div className={componentStyles.metricValue}>
                  {details?.height ? details.height / 10 : "—"} {HEIGHT}
                </div>
              </div>
              {details?.base_experience != null && (
                <div className={componentStyles.rowContent}>
                  <div className={componentStyles.metricLabel}>
                    <FontAwesomeIcon icon={faStar} /> Base exp
                  </div>
                  <div className={componentStyles.metricValue}>
                    {details.base_experience}
                  </div>
                </div>
              )}
              {details?.order != null && (
                <div className={componentStyles.rowContent}>
                  <div className={componentStyles.metricLabel}>
                    <FontAwesomeIcon icon={faSortNumericDown} /> Dex order
                  </div>
                  <div className={componentStyles.metricValue}>
                    #{details.order}
                  </div>
                </div>
              )}
              {details?.moves?.length != null && (
                <div className={componentStyles.rowContent}>
                  <div className={componentStyles.metricLabel}>
                    <FontAwesomeIcon icon={faList} /> Moves
                  </div>
                  <div className={componentStyles.metricValue}>
                    {details.moves.length}
                  </div>
                </div>
              )}
            </div>

            {details && (details.types?.length ?? 0) > 0 && (
              <>
                <div className={componentStyles.statsHeader}>
                  <span><FontAwesomeIcon icon={faLayerGroup} /> Types</span>
                </div>
                <div className={componentStyles.typesWrap}>
                  {(details.types ?? []).map((t: any, i: number) => (
                    <span key={i} className={componentStyles.typeChip}>
                      {t?.type?.name ?? ""}
                    </span>
                  ))}
                </div>
              </>
            )}

            {details && (details.abilities?.length ?? 0) > 0 && (
              <>
                <div className={componentStyles.statsHeader}>
                  <span><FontAwesomeIcon icon={faWandMagicSparkles} /> Abilities</span>
                </div>
                <ul className={componentStyles.abilityList}>
                  {(details.abilities ?? []).map((a: any, i: number) => (
                    <li key={i}>
                      {a?.ability?.name ?? ""}
                      {a.is_hidden && (
                        <span className={componentStyles.hiddenBadge}> hidden</span>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className={componentStyles.statsHeader}>
              <span>Base stats</span>
            </div>

            {Object.keys(statsMap).length > 0 &&
              Object.keys(statsMap).map((key: any, i) => {
                const value = statsMap[key];
                const percent = Math.min(100, Math.round((value / 200) * 100));
                return (
                  <div key={i} className={componentStyles.statRow}>
                    <div className={componentStyles.statLabel}>
                      <FontAwesomeIcon icon={statIcons[i]} /> {key.toUpperCase()}
                    </div>
                    <div className={componentStyles.statValue}>
                      <span>{value}</span>
                      <div className={componentStyles.statBar}>
                        <div
                          className={componentStyles.statBarFill}
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
