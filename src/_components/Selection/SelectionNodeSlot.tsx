import * as React from "react";
import { Selection } from "../../_store/_reducers/selection";

function SelectionNodeSlot({ selection }: { selection: Selection }) {
  return <h2>{`x: ${selection.item.x}, y: ${selection.item.y}`}</h2>;
}

export default SelectionNodeSlot;
