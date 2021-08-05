import * as React from "react";
import { EDGE_FEATURES_DATA } from "../_data/edges";
import { BASE_LINE_WIDTH } from "../_data/primordials";
import Coords from "../_models/Coords";
import EdgeModel from "../_models/Edge";
import { useAppDispatch, useAppSelector } from "../_store/hooks";
import { langSelector } from "../_store/_reducers/app";
import { select } from "../_store/_reducers/selection";

function Edge({
  edge,
  origin,
  selected = false,
}: {
  edge: EdgeModel;
  origin: Coords;
  selected?: boolean;
}) {
  const lang = useAppSelector(langSelector);
  const dispatch = useAppDispatch();
  const {
    a: { x: aX, y: aY },
    b: { x: bX, y: bY },
    features,
  } = edge;
  const displayAX = origin.x + aX;
  const displayAY = origin.y + aY;
  const displayBX = origin.x + bX;
  const displayBY = origin.y + bY;
  return (
    <g
      onClick={(ev) => {
        ev.stopPropagation();
        dispatch(
          select({
            next: {
              type: "edge-model",
              item: edge,
            },
          })
        );
      }}
    >
      <line
        x1={displayAX}
        y1={displayAY}
        x2={displayBX}
        y2={displayBY}
        stroke={selected ? "red" : "grey"}
        strokeWidth={BASE_LINE_WIDTH}
      />
      <text
        x={displayAX + (bX - aX) / 2}
        y={displayAY + (bY - aY) / 2 - 35}
        textAnchor="middle"
      >
        {features
          ?.map((featureId) => EDGE_FEATURES_DATA[featureId].name[lang])
          .join(", ")}
      </text>
    </g>
  );
}

export default Edge;
