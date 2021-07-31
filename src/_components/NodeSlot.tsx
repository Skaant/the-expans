import { nanoid } from "@reduxjs/toolkit";
import * as React from "react";
import { BUILDINGS } from "../_data/buildings";
import { DIRECTIONS, DIRECTIONS_MODIFIERS } from "../_data/directions";
import { BASE_NODE_RADIUS } from "../_data/primordials";
import Coords from "../_models/Coords";
import NodeModel from "../_models/Node";
import { useAppDispatch } from "../_store/hooks";
import { addNode } from "../_store/_reducers/nodes";

function NodeSlot({
  source,
  direction,
  display,
}: {
  source: NodeModel;
  direction: DIRECTIONS;
  display: Coords;
}) {
  const dispatch = useAppDispatch();
  const { x: modX, y: modY } = DIRECTIONS_MODIFIERS[direction];
  const x = display.x + modX;
  const y = display.y + modY;
  return (
    <circle
      key={`id-${direction}`}
      cx={x}
      cy={y}
      r={BASE_NODE_RADIUS / 2}
      onClick={() =>
        dispatch(
          addNode({
            source,
            node: {
              id: nanoid(),
              x: Math.round(source.x + modX),
              y: Math.round(source.y + modY),
              buildingId: [
                BUILDINGS.SHRINE,
                BUILDINGS.DOM,
                BUILDINGS.GRAV_POINT,
              ][Math.round(Math.random() * 3 - 0.5)],
            },
          })
        )
      }
    ></circle>
  );
}

export default NodeSlot;
