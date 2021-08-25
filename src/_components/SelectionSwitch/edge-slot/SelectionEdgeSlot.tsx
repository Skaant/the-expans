import * as React from "react";
import SelectionLayout from "../SelectionLayout";
import { SelectionModel } from "../../../_store/_reducers/selection";
import EdgeSlotModel from "../../../_models/EdgeSlot";
import SelectionEdgeSlotRight from "./SelectionEdgeSlotRight";
import SelectionEdgeSlotLeft from "./SelectionEdgeSlotLeft";

function SelectionEdgeSlot({ selection }: { selection: SelectionModel }) {
  const item = selection.item as EdgeSlotModel;
  return (
    <SelectionLayout
      selection={selection}
      left={<SelectionEdgeSlotLeft selection={selection} />}
      right={<SelectionEdgeSlotRight {...item} />}
    />
  );
}

export default SelectionEdgeSlot;
