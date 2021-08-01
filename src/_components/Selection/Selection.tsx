import * as React from "react";
import buildingsData from "../../_data/buildings";
import NodeModel from "../../_models/Node";
import { Selection as SelectionModel } from "../../_store/_reducers/selection";
import SelectionBuilding from "./SelectionBuilding";
import SelectionNode from "./SelectionNode";
import SelectionNodeSlot from "./SelectionNodeSlot";
import SelectionNodeSlotMenu from "./SelectionNodeSlotMenu";

function Selection({ selection }: { selection: SelectionModel }) {
  const { item, type } = selection;
  let building;
  if (type === "node") {
    const node = item as NodeModel;
    if (node.buildingId) {
      building = buildingsData[node.buildingId];
    }
  }
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
          {type === "node" ? (
            <SelectionNode selection={selection} />
          ) : (
            <SelectionNodeSlot selection={selection} />
          )}
        </div>
        <div
          style={{
            width: "61%",
            background: "white",
            color: "black",
            padding: "4vh 8vw",
          }}
        >
          {building && <SelectionBuilding building={building} />}
          {type === "node-slot" && <SelectionNodeSlotMenu />}
        </div>
      </div>
    </div>
  );
}

export default Selection;
