import React from "react";
import bdStyles from "./ButtonDock.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";

type ButtonDockProps = {
  onPrev: () => void;
  onNext: () => void;
  page: number;
  isLoading?: boolean;
};

const ButtonDock = ({ onPrev, onNext, page, isLoading }: ButtonDockProps) => {
  return (
    <React.Fragment>
      <div className={bdStyles.bdContainer}>
        <button
          className={bdStyles.bdButton}
          onClick={onPrev}
          disabled={page <= 1 || isLoading}
        >
          <FontAwesomeIcon icon={faCaretLeft} /> Prev
        </button>
        <span className={bdStyles.bdPageIndicator}>Page {page}</span>
        <button
          className={bdStyles.bdButton}
          onClick={onNext}
          disabled={isLoading}
        >
          <FontAwesomeIcon icon={faCaretRight} /> Next
        </button>
      </div>
    </React.Fragment>
  );
};

export default ButtonDock;
