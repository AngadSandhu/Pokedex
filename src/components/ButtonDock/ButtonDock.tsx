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
    <div className={bdStyles.bdContainer} aria-label="Pagination controls">
      <button
        type="button"
        className={bdStyles.bdButton}
        onClick={onPrev}
        disabled={page <= 1 || isLoading}
      >
        <FontAwesomeIcon icon={faCaretLeft} />
        <span>Prev</span>
      </button>
      <span className={bdStyles.bdPageIndicator}>Page {page}</span>
      <button
        type="button"
        className={bdStyles.bdButton}
        onClick={onNext}
        disabled={isLoading}
      >
        <span>Next</span>
        <FontAwesomeIcon icon={faCaretRight} />
      </button>
    </div>
  );
};

export default ButtonDock;
