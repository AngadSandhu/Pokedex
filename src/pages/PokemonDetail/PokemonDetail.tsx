import { useEffect } from "react";
import componentStyles from "./PokemonDetail.module.css";

const PokemonDetail = (props: any) => {
  useEffect(() => {
    console.log("Detail Props", props);
  }, []);
  return (
    <div className={componentStyles.layout}>
      <div className={componentStyles.imageHolder}></div>
      <div></div>
    </div>
  );
};

export default PokemonDetail;
