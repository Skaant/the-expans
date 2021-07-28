import * as React from "react";
import { DIRECTIONS, DIRECTIONS_MODIFIERS } from "../_data/directions";
import { BASE_NODE_RADIUS } from "../_data/primordials";
import NodeModel from "../_interfaces/Node";
import IOrigin from "../_interfaces/Origin";

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
  const { x: oX, y: oY } = origin;
  const { id, x: nX, y: nY } = node;
  const x = oX + nX;
  const y = oY + nY;
  return (
    <g onClick={() => select(node)}>
      <text x={x} y={y - 70} textAnchor="middle">
        {id}
      </text>
      <circle
        cx={x}
        cy={y}
        r={BASE_NODE_RADIUS * 2}
        style={selected ? { stroke: "red", strokeWidth: 5 } : {}}
      />
      {selected &&
        Object.values(DIRECTIONS).map((direction) => {
          const { x: modX, y: modY } = DIRECTIONS_MODIFIERS[direction];
          return (
            <circle
              key={`id-${direction}`}
              cx={x + modX}
              cy={y + modY}
              r={BASE_NODE_RADIUS / 2}
            ></circle>
          );
        })}
    </g>
  );
}

export default Node;
