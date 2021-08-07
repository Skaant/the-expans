import React, { ReactElement } from "react";
import { SelectionModel } from "../../_store/_reducers/selection";
import "./selection.css";

function SelectionLayout({
  selection,
  left,
  right,
}: {
  selection: SelectionModel;
  left: ReactElement;
  right?: ReactElement;
}) {
  return (
    <div
      id="selection"
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "max-content",
      }}
    >
      <div style={{ display: "flex", height: "100%" }}>
        <div
          style={{
            width: "max-content",
            background: "black",
            color: "white",
            padding: "4vh 8vw",
            textAlign: "right",
          }}
        >
          {left}
        </div>
        <div
          style={{
            width: "auto",
            background: "white",
            color: "black",
            padding: "4vh 8vw",
          }}
        >
          {right}
        </div>
      </div>
    </div>
  );
}

export default SelectionLayout;
