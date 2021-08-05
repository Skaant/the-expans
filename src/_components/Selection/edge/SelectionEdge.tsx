import * as React from "react";
import SelectionLayout from "../SelectionLayout";
import { SelectionModel } from "../../../_store/_reducers/selection";
import SelectionEdgeLeft from "./SelectionEdgeLeft";
import SelectionEdgeRight from "./SelectionEdgeRight";
import EdgeModel from "../../../_models/Edge";

function SelectionEdge({ selection }: { selection: SelectionModel }) {
  const edge = selection.item as EdgeModel;
  return (
    <SelectionLayout
      selection={selection}
      left={<SelectionEdgeLeft selection={selection} />}
      right={<SelectionEdgeRight edge={edge} />}
    />
  );
}

export default SelectionEdge;
