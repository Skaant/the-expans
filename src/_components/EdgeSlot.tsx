import * as React from "react";
import { DIRECTIONS_MODIFIERS } from "../_data/directions";
import { EDGE_TYPES } from "../_data/edges";
import { BASE_LINE_WIDTH } from "../_data/primordials";
import Coords from "../_models/Coords";
import EdgeSlotModel from "../_models/EdgeSlot";
import NodeModel, { NodeClass } from "../_models/Node";
import { useAppDispatch, useAppSelector } from "../_store/hooks";
import { SelectPayload } from "../_store/_actions/selection";
import { addEdge } from "../_store/_reducers/edges";
import { nodesSelector } from "../_store/_reducers/nodes";
import NodeSlotFlagIcon from "./_icons/NodeSlotFlag.icon";

const edgeSlotTypeStroke = {
  [EDGE_TYPES.PLAIN]: "white",
  [EDGE_TYPES.MOUNTAIN]: "grey",
  [EDGE_TYPES.WATER]: "blue",
  [EDGE_TYPES.SKIGH]: "lightGrey",
};

function EdgeSlot({
  origin,
  selected,
  select,
  ...edgeSlot
}: EdgeSlotModel & {
  origin: Coords;
  selected?: boolean;
  select: (selection: SelectPayload) => void;
}) {
  const { sourceId, direction, type } = edgeSlot;
  const nodes = useAppSelector(nodesSelector);
  const dispatch = useAppDispatch();
  const source = nodes.find((node) => sourceId === node.id) as NodeModel;
  const { x: modX, y: modY } = DIRECTIONS_MODIFIERS[direction];
  const displayAX = origin.x + source.x + modX * 0.25;
  const displayAY = origin.y + source.y + modY * 0.25;
  const displayBX = origin.x + source.x + modX * 0.9;
  const displayBY = origin.y + source.y + modY * 0.9;
  const targetX = source.x + modX;
  const targetY = source.y + modY;
  return (
    <>
      <g
        style={{ cursor: "pointer" }}
        onClick={(ev) => {
          ev.stopPropagation();
          select({
            next: {
              item: edgeSlot,
              type: "edge-slot",
            },
            source,
          });
        }}
      >
        <line
          x1={displayAX}
          y1={displayAY}
          x2={displayBX}
          y2={displayBY}
          stroke="#0000"
          strokeWidth={BASE_LINE_WIDTH * 9}
        />
        <line
          x1={displayAX}
          y1={displayAY}
          x2={displayBX}
          y2={displayBY}
          stroke={selected ? "red" : edgeSlotTypeStroke[type]}
          strokeWidth={BASE_LINE_WIDTH}
          strokeDasharray="8px"
        />
      </g>
      {selected && (
        <g
          onClick={(ev) => {
            ev.preventDefault();
            dispatch(
              addEdge({
                edge: {
                  id: edgeSlot.id,
                  a: {
                    x: source.x,
                    y: source.y,
                  },
                  b: {
                    x: targetX,
                    y: targetY,
                  },
                },
                node: new NodeClass({ x: targetX, y: targetY }),
              })
            );
          }}
        >
          <NodeSlotFlagIcon x={origin.x + targetX} y={origin.y + targetY} />
        </g>
      )}
    </>
  );
}

export default EdgeSlot;
