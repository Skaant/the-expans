import * as React from "react";
import { DIRECTIONS } from "../_data/directions";
import NodeModel from "../_models/Node";
import Coords from "../_models/Coords";
import NodeSlot from "./NodeSlot";
import buildings from "../_data/buildings";
import Building from "./Building";
import { Selection } from "../_store/_reducers/selection";
import NodeSlotModel from "../_models/NodeSlot";

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
  select: (selection?: Selection) => void;
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
