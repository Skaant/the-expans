import * as React from "react";
import buildingsData from "../../_data/buildings";
import NodeModel from "../../_models/Node";

function Dialog({ selection }: { selection: NodeModel }) {
  const building = selection.buildingId && buildingsData[selection.buildingId];
  return (
    <div
      style={{ position: "absolute", bottom: 0, width: "100%", height: "39%" }}
    >
      <div style={{ display: "flex", height: "100%" }}>
        <div
          style={{
            width: "39%",
            background: "black",
            color: "white",
            padding: "4vh 8vw",
            textAlign: "right",
          }}
        >
          <p>NODE</p>
          <h2>{selection.id}</h2>
          <p>{`${selection.x}, ${selection.y}`}</p>
        </div>
        <div
          style={{
            width: "61%",
            background: "white",
            color: "black",
            padding: "4vh 8vw",
          }}
        >
          {building && (
            <>
              <p>BUILDING</p>
              <h2>{building.name}</h2>
              {building.outputs?.map((output, index) => (
                <p key={`${building.id}-${index}`}>
                  <b>{output.ressourceId} :</b>{" "}
                  {output.type === "static"
                    ? output.amount
                    : `${output.amount} / ${output.relativeTo}`}
                  {output.constraints
                    ? `(${output.constraints.join(", ")})`
                    : ""}
                </p>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dialog;
