import * as React from "react";
import { DIRECTIONS_MODIFIERS } from "../_data/directions";
import { EDGE_TYPES } from "../_data/edges";
import { BASE_LINE_WIDTH } from "../_data/primordials";
import Coords from "../_models/Coords";
import EdgeSlotModel from "../_models/EdgeSlot";
import NodeModel from "../_models/Node";
import { useAppSelector } from "../_store/hooks";
import { nodesSelector } from "../_store/_reducers/nodes";
import { SelectionModel } from "../_store/_reducers/selection";
import NodeSlotFlagIcon from "./_icons/NodeSlotFlag.icon";

function EdgeSlot({
  display,
  selected,
  select,
  ...edgeSlot
}: EdgeSlotModel & {
  display: Coords;
  selected?: boolean;
  select: (selection?: SelectionModel) => void;
}) {
  const { sourceId, direction, type } = edgeSlot;
  const nodes = useAppSelector(nodesSelector);
  const source = nodes.find((node) => sourceId === node.id) as NodeModel;
  const { x: modX, y: modY } = DIRECTIONS_MODIFIERS[direction];
  const displayAX = display.x + source.x + modX * 0.25;
  const displayAY = display.y + source.y + modY * 0.25;
  const displayBX = display.x + source.x + modX * 0.9;
  const displayBY = display.y + source.y + modY * 0.9;
  return (
    <>
      <line
        x1={displayAX}
        y1={displayAY}
        x2={displayBX}
        y2={displayBY}
        stroke={
          selected ? "red" : type === EDGE_TYPES.GROUND ? "green" : "grey"
        }
        strokeWidth={BASE_LINE_WIDTH}
        strokeDasharray="8px"
        onClick={(ev) => {
          ev.stopPropagation();
          select({
            item: edgeSlot,
            type: "edge-slot",
          });
        }}
      />
      {selected && (
        <NodeSlotFlagIcon
          x={display.x + source.x + modX}
          y={display.y + source.y + modY}
        />
      )}
    </>
  );
}

export default EdgeSlot;
