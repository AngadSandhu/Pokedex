import React from "react";
import bdStyles from "./ButtonDock.module.css";

const ButtonDock = () => {
  return (
    <React.Fragment>
      <div className={bdStyles.bdContainer}>
        <button className={bdStyles.bdButton}> Left</button>
        <button className={bdStyles.bdButton}>Right</button>
      </div>
    </React.Fragment>
  );
};

export default ButtonDock;
