import { useState } from "react";
import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import sidemenuStyles from "./Sidemenu.module.css";
import Pokeball from "../../assets/images/Pokeball.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";

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
            <Link to="/" onClick={() => setMenuToggle(!menuToggle)}>
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li>
            <Link to="/pokemon" onClick={() => setMenuToggle(!menuToggle)}>
              <FontAwesomeIcon icon={faCircleDot} /> Pokemon
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuToggle(!menuToggle)}>
              <FontAwesomeIcon icon={faFileLines} /> About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidemenu;
