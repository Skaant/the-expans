import * as React from "react";
import { DIRECTIONS } from "../_data/directions";
import Coords from "../_models/Coords";
import EdgeSlotModel from "../_models/EdgeSlot";
import NodeModel from "../_models/Node";
import EdgeSlot from "./EdgeSlot";

function NodeEdgesRosette({
  node,
  display,
}: {
  node: NodeModel;
  display: Coords;
}) {
  return (
    <>
      {Object.values(DIRECTIONS).map((direction) => {
        const { /* type, */ value } = node.edgesRosette[direction];
        // if (type === "edge-slot") {
        const edgeSlot = value as EdgeSlotModel;
        return (
          <EdgeSlot
            key={`${node.id}-${direction}`}
            sourceId={node.id}
            direction={direction}
            type={edgeSlot.type}
            display={{
              x: display.x,
              y: display.y,
            }}
          />
        );
        // }
      })}
    </>
  );
}

export default NodeEdgesRosette;
