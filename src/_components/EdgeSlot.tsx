import * as React from "react";
import { DIRECTIONS_MODIFIERS } from "../_data/directions";
import { EDGE_TYPES } from "../_data/edges";
import { BASE_LINE_WIDTH } from "../_data/primordials";
import Coords from "../_models/Coords";
import EdgeSlotModel from "../_models/EdgeSlot";
import NodeModel from "../_models/Node";
import { useAppSelector } from "../_store/hooks";
import { nodesSelector } from "../_store/_reducers/nodes";

function EdgeSlot({
  sourceId,
  direction,
  type,
  display,
  selected,
}: Omit<EdgeSlotModel, "id"> & {
  display: Coords;
  selected?: boolean;
}) {
  const nodes = useAppSelector(nodesSelector);
  const source = nodes.find((node) => sourceId === node.id) as NodeModel;
  const { x: modX, y: modY } = DIRECTIONS_MODIFIERS[direction];
  const displayAX = display.x + source.x + modX * 0.25;
  const displayAY = display.y + source.y + modY * 0.25;
  const displayBX = display.x + source.x + modX * 0.75;
  const displayBY = display.y + source.y + modY * 0.75;
  return (
    <line
      x1={displayAX}
      y1={displayAY}
      x2={displayBX}
      y2={displayBY}
      stroke={selected ? "red" : type === EDGE_TYPES.GROUND ? "green" : "grey"}
      strokeWidth={BASE_LINE_WIDTH}
      strokeDasharray="8px"
    />
  );
}

export default EdgeSlot;
