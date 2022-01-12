import React from "react";

import "./styles.css";
import { ReactComponent as StarEmpty } from "assets/img/starEmpty.svg";
import { ReactComponent as StarHalf } from "assets/img/starHalf.svg";
import { ReactComponent as StarFull } from "assets/img/starFull.svg";

export function MovieStars() {
  return (
    <div className="dsmovie-stars-container">
      <StarFull />
      <StarFull />
      <StarFull />
      <StarHalf />
      <StarEmpty />
    </div>
  );
}
