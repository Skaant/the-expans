import * as React from "react";
import BUILDINGS_DATA from "../_data/buildings";
import RESSOURCES from "../_data/ressources";
import { useAppSelector } from "../_store/hooks";
import { nodesSelector } from "../_store/_reducers/nodes";

function TopBar() {
  const nodes = useAppSelector(nodesSelector);
  const ressources = nodes.reduce(
    (ressources, node) => {
      const building = node.buildingId && BUILDINGS_DATA[node.buildingId];
      if (!building) return ressources;
      building.inputs?.forEach(
        (input) => (ressources[input.ressourceId] -= input.amount)
      );
      building.outputs?.forEach(
        (output) => (ressources[output.ressourceId] += output.amount)
      );
      return ressources;
    },
    Object.values(RESSOURCES).reduce(
      (ressources, ressourceId) => ({
        ...ressources,
        [ressourceId]: 0,
      }),
      {} as { [value in RESSOURCES]: number }
    )
  );
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        width: "100%",
        height: "max-content",
        display: "flex",
        background: "black",
        color: "white",
        padding: "8px",
        boxSizing: "border-box",
      }}
    >
      {Object.entries(ressources)
        .filter(([, amount]) => amount)
        .map(([ressourceId, amount]) => (
          <div
            key={ressourceId}
            style={{ margin: "0 8px", textTransform: "uppercase" }}
          >
            {ressourceId}: <b>{amount}</b>
          </div>
        ))}
    </div>
  );
}

export default TopBar;
