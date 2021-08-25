import * as React from "react";
import { SelectionModel } from "../../_store/_reducers/selection";
import SelectionNode from "./node/SelectionNode";
import SelectionEdge from "./edge/SelectionEdge";
import SelectionEdgeSlot from "./edge-slot/SelectionEdgeSlot";

function SelectionSwitch({ selection }: { selection: SelectionModel }) {
  switch (selection.type) {
    case "node":
      return <SelectionNode selection={selection} />;
    case "edge":
      return <SelectionEdge selection={selection} />;
    case "edge-slot":
      return <SelectionEdgeSlot selection={selection} />;
  }
}

export default SelectionSwitch;
