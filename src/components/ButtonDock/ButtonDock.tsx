import React from "react";
import bdStyles from "./ButtonDock.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

const ButtonDock = () => {
  return (
    <React.Fragment>
      <div className={bdStyles.bdContainer}>
        <button className={bdStyles.bdButton}>
          {" "}
          <FontAwesomeIcon icon={faLeftLong} />{" "}
        </button>
        <button className={bdStyles.bdButton}>
          {" "}
          <FontAwesomeIcon icon={faRightLong} />{" "}
        </button>
      </div>
    </React.Fragment>
  );
};

export default ButtonDock;
