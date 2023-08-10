import React from "react";
import bdStyles from "./ButtonDock.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";

const ButtonDock = () => {
  return (
    <React.Fragment>
      <div className={bdStyles.bdContainer}>
        <button className={bdStyles.bdButton}>
          {" "}
          <FontAwesomeIcon icon={faCaretLeft} />{" "}
        </button>
        <button className={bdStyles.bdButton}>
          {" "}
          <FontAwesomeIcon icon={faCaretRight} />{" "}
        </button>
      </div>
    </React.Fragment>
  );
};

export default ButtonDock;
