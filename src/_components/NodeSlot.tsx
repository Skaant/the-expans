import * as React from "react";
import { DIRECTIONS, DIRECTIONS_MODIFIERS } from "../_data/directions";
import { BASE_NODE_RADIUS } from "../_data/primordials";
import Coords from "../_models/Coords";
import NodeModel from "../_models/Node";
import { useAppDispatch } from "../_store/hooks";
import { select } from "../_store/_reducers/selection";

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
      cx={x}
      cy={y}
      r={BASE_NODE_RADIUS / 2}
      onClick={(ev) => {
        ev.stopPropagation();
        dispatch(
          select({
            next: {
              item: {
                id: `${source.id}-${direction}`,
                source,
                x,
                y,
              },
              type: "node-slot",
            },
          })
        );
      }}
    ></circle>
  );
}

export default NodeSlot;
