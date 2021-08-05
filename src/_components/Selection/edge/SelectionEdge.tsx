import * as React from "react";
import SelectionLayout from "../SelectionLayout";
import { SelectionModel } from "../../../_store/_reducers/selection";
import SelectionEdgeLeft from "./SelectionEdgeLeft";

function SelectionEdge({ selection }: { selection: SelectionModel }) {
  return (
    <SelectionLayout
      selection={selection}
      left={<SelectionEdgeLeft selection={selection} />}
    />
  );
}

export default SelectionEdge;
