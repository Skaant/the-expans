import * as React from "react";
import SelectionLayout from "../SelectionLayout";
import { SelectionModel } from "../../../_store/_reducers/selection";
import SelectionNodeSlotLeft from "./SelectionNodeSlotLeft";
import SelectionNodeSlotRight from "./SelectionNodeSlotRight";
import NodeSlotModel from "../../../_models/NodeSlot";

function SelectionNodeSlot({ selection }: { selection: SelectionModel }) {
  const item = selection.item as NodeSlotModel;
  return (
    <SelectionLayout
      selection={selection}
      left={<SelectionNodeSlotLeft selection={selection} />}
      right={<SelectionNodeSlotRight {...item} />}
    />
  );
}

export default SelectionNodeSlot;
