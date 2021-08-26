import * as React from "react";
import NodeModel from "../_models/Node";
import Coords from "../_models/Coords";
import buildings from "../_data/buildings";
import Building from "./Building";
import { SelectionModel } from "../_store/_reducers/selection";
import { BASE_NODE_RADIUS } from "../_data/primordials";
import NodeEdgesRosette from "./NodeEdgesRosette";
import EdgeSlotModel from "../_models/EdgeSlot";
import EdgeSlot from "./EdgeSlot";

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
  sourcing?: EdgeSlotModel;
  select: (selection?: SelectionModel) => void;
}) {
  const { x: originX, y: originY } = origin;
  const { x: nodeX, y: nodeY, buildingId } = node;
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
      <circle // selection hitbox / highlight
        cx={displayX}
        cy={displayY}
        r={BASE_NODE_RADIUS * 3}
        fill={selected ? "#fff8" : "#0000"}
        style={{ cursor: "pointer" }}
      />
      {selected && (
        <>
          <NodeEdgesRosette
            node={node}
            display={{ x: displayX, y: displayY }}
          />
        </>
      )}
      {sourcing && (
        <EdgeSlot
          sourceId={node.id}
          direction={sourcing.direction}
          type={sourcing.type}
          display={{
            x: displayX,
            y: displayY,
          }}
          selected={true}
        />
      )}
      {building ? (
        <Building x={displayX} y={displayY} building={building} />
      ) : (
        <circle
          cx={displayX}
          cy={displayY}
          r={BASE_NODE_RADIUS}
          style={selected ? { stroke: "red", strokeWidth: 5 } : {}}
        />
      )}
    </g>
  );
}

export default Node;
