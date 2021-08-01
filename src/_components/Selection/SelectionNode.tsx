import * as React from "react";
import { Selection } from "../../_store/_reducers/selection";

function SelectionNode({ selection }: { selection: Selection }) {
  return (
    <>
      <p>NODE</p>
      <h2 style={{ wordBreak: "break-all" }}>{selection.item.id}</h2>
      <p>{`${selection.item.x}, ${selection.item.y}`}</p>
    </>
  );
}

export default SelectionNode;
