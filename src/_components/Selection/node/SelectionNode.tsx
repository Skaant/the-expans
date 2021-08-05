import * as React from "react";
import SelectionLayout from "../SelectionLayout";
import { SelectionModel } from "../../../_store/_reducers/selection";
import SelectionNodeLeft from "./SelectionNodeLeft";
import NodeModel from "../../../_models/Node";
import BUILDINGS_DATA from "../../../_data/buildings";
import SelectionNodeRightBuilding from "./SelectionNodeRightBuilding";

function SelectionNode({ selection }: { selection: SelectionModel }) {
  const item = selection.item as NodeModel;
  const building = item.buildingId && BUILDINGS_DATA[item.buildingId];
  return (
    <SelectionLayout
      selection={selection}
      left={<SelectionNodeLeft selection={selection} />}
      right={building && <SelectionNodeRightBuilding building={building} />}
    />
  );
}

export default SelectionNode;