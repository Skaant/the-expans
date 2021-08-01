import * as React from "react";
import { Selection } from "../../_store/_reducers/selection";

function SelectionNodeSlot({ selection }: { selection: Selection }) {
  return (
    <>
      <p>NODE SLOT</p>
      <h2 style={{ wordBreak: "break-all" }}>{selection.item.id}</h2>
      <p>{`${selection.item.x}, ${selection.item.y}`}</p>
    </>
  );
}

export default SelectionNodeSlot;
