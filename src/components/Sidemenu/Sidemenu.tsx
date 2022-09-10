import { useState } from "react";
import { Link } from "react-router-dom";
import sidemenuStyles from "./Sidemenu.module.css";
import Pokeball from "../../assets/images/Pokeball.png";

const Sidemenu = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div>
      <div className={sidemenuStyles.pokeballMenuToggle}>
        <img
          className={sidemenuStyles.pokeball}
          src={Pokeball}
          alt="menuToggle"
          onClick={() => setMenuToggle(!menuToggle)}
        />
      </div>
      <div
        className={
          menuToggle
            ? [sidemenuStyles.sidemenuContainer, sidemenuStyles.active].join(
                " "
              )
            : sidemenuStyles.sidemenuContainer
        }
      >
        <ul>
          <li>
            <div>Home</div>
          </li>
          <li>
            <div>Pokemon</div>
          </li>
          <li>
            <div>About</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidemenu;
