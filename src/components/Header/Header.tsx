import React from "react";
import headerStyles from "./Header.module.css";
import PokemonLogo from "../../assets/images/PokemonLogo.png";

const Header = () => {
  return (
    <div className={headerStyles.header}>
      <img src={PokemonLogo} height={60} width={100} />
    </div>
  );
};

export default Header;
