import * as React from "react";
import { SelectionModel } from "../../_store/_reducers/selection";
import SelectionNode from "./node/SelectionNode";
import SelectionNodeSlot from "./node-slot/SelectionNodeSlot";
import SelectionEdge from "./edge/SelectionEdge";

function SelectionSwitch({ selection }: { selection: SelectionModel }) {
  switch (selection.type) {
    case "node":
      return <SelectionNode selection={selection} />;
    case "node-slot":
      return <SelectionNodeSlot selection={selection} />;
    case "edge-model":
      return <SelectionEdge selection={selection} />;
  }
}

export default SelectionSwitch;
