import * as React from "react";
import { DIRECTIONS } from "../_data/directions";
import NodeModel from "../_models/Node";
import Coords from "../_models/Coords";
import NodeSlot from "./NodeSlot";
import buildings from "../_data/buildings";
import Building from "./Building";
import { SelectionModel } from "../_store/_reducers/selection";
import NodeSlotModel from "../_models/NodeSlot";
import { BASE_NODE_RADIUS } from "../_data/primordials";

function Node({
  node,
  origin,
  selected,
  sourcing,
  select,
}: {
  node: NodeModel;
  origin: Coords;
  selected: boolean;
  sourcing?: NodeSlotModel;
  select: (selection?: SelectionModel) => void;
}) {
  const { x: originX, y: originY } = origin;
  const { id, x: nodeX, y: nodeY, buildingId } = node;
  const displayX = originX + nodeX;
  const displayY = originY + nodeY;
  const building = buildingId && buildings[buildingId];
  return (
    <g
      onClick={(ev) => {
        ev.stopPropagation();
        select({
          item: node,
          type: "node",
        });
      }}
    >
      {sourcing && (
        <NodeSlot
          source={node}
          direction={sourcing.direction}
          display={{
            x: displayX,
            y: displayY,
          }}
          selected={true}
        />
      )}
      <circle
        cx={displayX}
        cy={displayY}
        r={BASE_NODE_RADIUS}
        style={selected ? { stroke: "red", strokeWidth: 5 } : {}}
      />
      <Building
        nodeId={id}
        x={displayX}
        y={displayY}
        building={building}
        selected={selected}
      />
      {selected &&
        Object.values(DIRECTIONS).map((direction) => (
          <NodeSlot
            key={`${id}-${direction}`}
            source={node}
            direction={direction}
            display={{
              x: displayX,
              y: displayY,
            }}
          />
        ))}
    </g>
  );
}

export default Node;
