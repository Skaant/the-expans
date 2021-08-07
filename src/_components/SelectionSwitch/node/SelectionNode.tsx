import * as React from "react";
import SelectionLayout from "../SelectionLayout";
import { SelectionModel } from "../../../_store/_reducers/selection";
import SelectionNodeLeft from "./SelectionNodeLeft";
import NodeModel from "../../../_models/Node";
import BUILDINGS_DATA from "../../../_data/buildings";
import SelectionNodeRightBuilding from "./SelectionNodeRightBuilding";
import SelectionNodeRightEmpty from "./SelectionNodeRightEmpty";

function SelectionNode({ selection }: { selection: SelectionModel }) {
  const node = selection.item as NodeModel;
  const building = node.buildingId && BUILDINGS_DATA[node.buildingId];
  return (
    <SelectionLayout
      selection={selection}
      left={<SelectionNodeLeft selection={selection} />}
      right={
        building ? (
          <SelectionNodeRightBuilding building={building} />
        ) : (
          <SelectionNodeRightEmpty node={node} />
        )
      }
    />
  );
}

export default SelectionNode;
