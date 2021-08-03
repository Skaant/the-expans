import * as React from "react";
import buildingsData from "../../_data/buildings";
import NodeModel from "../../_models/Node";
import NodeSlotModel from "../../_models/NodeSlot";
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
          {type === "node" ? (
            <SelectionNode selection={selection} />
          ) : (
            <SelectionNodeSlot selection={selection} />
          )}
        </div>
        <div
          style={{
            width: "auto",
            background: "white",
            color: "black",
            padding: "4vh 8vw",
          }}
        >
          {building && <SelectionBuilding building={building} />}
          {type === "node-slot" && (
            <SelectionNodeSlotMenu {...(item as NodeSlotModel)} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Selection;
