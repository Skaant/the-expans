import * as React from "react";
import { DIRECTIONS } from "../_data/directions";
import Coords from "../_models/Coords";
import EdgeSlotModel from "../_models/EdgeSlot";
import NodeModel from "../_models/Node";
import { SelectPayload } from "../_store/_actions/selection";
import EdgeSlot from "./EdgeSlot";

function NodeEdgesRosette({
  node,
  origin,
  select,
}: {
  node: NodeModel;
  origin: Coords;
  select: (selection: SelectPayload) => void;
}) {
  return (
    <>
      {Object.values(DIRECTIONS).map((direction) => {
        // if (type === "edge-slot") {
        const { id, type } = node.edgesRosette[direction]
          .value as EdgeSlotModel;
        return (
          <EdgeSlot
            key={id}
            id={id}
            sourceId={node.id}
            direction={direction}
            type={type}
            display={{
              x: origin.x + node.x,
              y: origin.y + node.y,
            }}
            select={select}
          />
        );
        // }
      })}
    </>
  );
}

export default NodeEdgesRosette;
