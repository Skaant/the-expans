import * as React from "react";
import { DIRECTIONS } from "../_data/directions";
import Coords from "../_models/Coords";
import EdgeSlotModel from "../_models/EdgeSlot";
import NodeModel from "../_models/Node";
import { SelectionModel } from "../_store/_reducers/selection";
import EdgeSlot from "./EdgeSlot";

function NodeEdgesRosette({
  node,
  display,
  select,
}: {
  node: NodeModel;
  display: Coords;
  select: (selection?: SelectionModel) => void;
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
              x: display.x,
              y: display.y,
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
