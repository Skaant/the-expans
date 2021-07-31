import * as React from "react";
import { BASE_LINE_WIDTH } from "../_data/primordials";
import Coords from "../_models/Coords";
import EdgeModel from "../_models/Edge";

function Edge({
  id,
  a: { x: aX, y: aY },
  b: { x: bX, y: bY },
  origin,
}: EdgeModel & {
  origin: Coords;
}) {
  const displayAX = origin.x + aX;
  const displayAY = origin.y + aY;
  const displayBX = origin.x + bX;
  const displayBY = origin.y + bY;
  return (
    <g>
      <text
        x={displayAX + (bX - aX) / 2}
        y={displayAY + (bY - aY) / 2 - 35}
        textAnchor="middle"
      >
        {id}
      </text>
      <line
        x1={displayAX}
        y1={displayAY}
        x2={displayBX}
        y2={displayBY}
        stroke="grey"
        strokeWidth={BASE_LINE_WIDTH}
      />
    </g>
  );
}

export default Edge;
