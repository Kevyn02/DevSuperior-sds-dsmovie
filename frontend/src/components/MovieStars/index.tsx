import React from "react";

import "./styles.css";
import { ReactComponent as StarEmpty } from "assets/img/starEmpty.svg";
import { ReactComponent as StarHalf } from "assets/img/starHalf.svg";
import { ReactComponent as StarFull } from "assets/img/starFull.svg";

interface Props {
  score: number;
}
export function MovieStars({ score }: Props) {
  const qtStarFull = Math.floor(score / 1);
  const qtStarHall = score % 1 ? 1 : 0;
  const qtStarEmpty = 5 - qtStarFull - qtStarHall;

  return (
    <div className="dsmovie-stars-container">
      {Array(qtStarFull)
        .fill(0)
        .map((_, index) => {
          return <StarFull key={`StarFull-${index}`} />;
        })}
      {Array(qtStarHall)
        .fill(0)
        .map((_, index) => {
          return <StarHalf key={`StarHalf-${index}`} />;
        })}
      {Array(qtStarEmpty)
        .fill(0)
        .map((_, index) => {
          return <StarEmpty key={`StarEmpty-${index}`} />;
        })}
    </div>
  );
}
