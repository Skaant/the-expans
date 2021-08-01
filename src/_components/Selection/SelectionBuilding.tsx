import * as React from "react";
import BuildingDataModel from "../../_models/data/Building";

function SelectionBuilding({ building }: { building: BuildingDataModel }) {
  return (
    <>
      <p>BUILDING</p>
      <h2>{building.name}</h2>
      <p>{building.description}</p>
      {building.outputs?.map((output, index) => (
        <p key={`${building.id}-${index}`}>
          <b>{output.ressourceId} :</b>{" "}
          {output.type === "static"
            ? output.amount
            : `${output.amount} / ${output.relativeTo}`}
          {output.constraints ? ` (${output.constraints.join(", ")})` : ""}
        </p>
      ))}
    </>
  );
}

export default SelectionBuilding;
