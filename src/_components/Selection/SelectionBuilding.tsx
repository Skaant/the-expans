import React, { useState } from "react";
import BuildingDataModel from "../../_models/data/Building";

function SelectionBuilding({ building }: { building: BuildingDataModel }) {
  const [collapse, setCollapse] = useState(true);
  return (
    <div onClick={() => setCollapse(!collapse)}>
      <h2>
        BUILDING <b>{building.name}</b>
      </h2>
      <p>{building.description}</p>
      {!collapse && (
        <>
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
      )}
    </div>
  );
}

export default SelectionBuilding;
