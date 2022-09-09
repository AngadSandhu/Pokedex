import { useState } from "react";
import sidemenuStyles from "./Sidemenu.module.css";
import Pokeball from "../../assets/images/Pokeball.png";

const Sidemenu = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div>
      <div>Pokeball</div>
      <div>Transition Menu</div>
    </div>
  );
};

export default Sidemenu;
