import * as React from "react";
import { DIRECTIONS, DIRECTIONS_MODIFIERS } from "../_data/directions";
import { BASE_NODE_RADIUS } from "../_data/primordials";
import Coords from "../_models/Coords";
import { useAppDispatch } from "../_store/hooks";
import { addNode } from "../_store/_reducers/nodes";

function NodeSlot({
  parent: {
    x: parentX,
    y: parentY
  },
  direction,
  display: {
    x: displayX,
    y: displayY
  }
} : {
  parent: Coords,
  direction: DIRECTIONS,
  display: Coords
}) {
  const dispatch = useAppDispatch();
  const { x: modX, y: modY } = DIRECTIONS_MODIFIERS[direction];
  const x = displayX + modX
  const y = displayY + modY
  return <circle
    key={`id-${direction}`}
    cx={x}
    cy={y}
    r={BASE_NODE_RADIUS / 2}
    onClick={() => dispatch(addNode({
      node: {
        id: 'SHRINE of Zumbaba',
        x: parentX + modX,
        y: parentY + modY
      }
    }))}
  ></circle>
}

export default NodeSlot