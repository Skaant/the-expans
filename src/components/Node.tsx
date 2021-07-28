import * as React from "react";
import { DIRECTIONS } from "../_data/directions";
import { BASE_NODE_RADIUS } from "../_data/primordials";
import NodeModel from "../_interfaces/Node";
import IOrigin from "../_interfaces/Origin";
import NodeSlot from "./NodeSlot";

function Node({
  node,
  origin,
  selected,
  select,
}: {
  node: NodeModel;
  origin: IOrigin;
  selected: boolean;
  select: (selected?: NodeModel) => void;
}) {
  const { x: originX, y: originY } = origin;
  const { id, x: nodeX, y: nodeY } = node;
  const displayX = originX + nodeX;
  const displayY = originY + nodeY;
  return (
    <g onClick={() => select(node)}>
      <text x={displayX} y={displayY - 70} textAnchor="middle">
        {id}
      </text>
      <circle
        cx={displayX}
        cy={displayY}
        r={BASE_NODE_RADIUS * 2}
        style={selected ? { stroke: "red", strokeWidth: 5 } : {}}
      />
      {selected &&
        Object.values(DIRECTIONS).map((direction) => {
          return <NodeSlot
            key={`${id}-${direction}`}
            parent={{
              x: nodeX,
              y: nodeY
            }}
            direction={direction}
            display={{
              x: displayX,
              y: displayY
            }}
          />
        })}
    </g>
  );
}

export default Node;
