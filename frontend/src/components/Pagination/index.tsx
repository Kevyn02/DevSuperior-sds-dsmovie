import React from "react";
import { ReactComponent as Arrow } from "assets/img/arrow.svg";
import "./styles.css";

interface Props {
  currentPage: number;
  totalPages: number;
  handleSwitchPages: (page: number) => void;
}
export function Pagination({
  currentPage,
  totalPages,
  handleSwitchPages,
}: Props) {
  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button
          className="dsmovie-pagination-button"
          onClick={() => handleSwitchPages(-1)}
          disabled={currentPage === 0}
        >
          <Arrow />
        </button>
        <p>{`${currentPage + 1} de ${totalPages}`}</p>
        <button
          className="dsmovie-pagination-button"
          onClick={() => handleSwitchPages(1)}
          disabled={currentPage === totalPages - 1}
        >
          <Arrow className="dsmovie-flip-horizontal" />
        </button>
      </div>
    </div>
  );
}
