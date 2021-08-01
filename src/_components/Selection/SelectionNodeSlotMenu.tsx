import * as React from "react";
import BUILDINGS_DATA, { BUILDINGS } from "../../_data/buildings";

function SelectionNodeSlotMenu() {
  return (
    <>
      <p>CONSTRUIRE UN BÂTIMENT</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {[BUILDINGS.WELL, BUILDINGS.FARM, BUILDINGS.DOM].map((buildingId) => {
          const { name, description } = BUILDINGS_DATA[buildingId];
          return (
            <div
              key={buildingId}
              style={{
                width: "33%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "4px",
              }}
            >
              <div>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
              <button
                type="button"
                style={{ width: "100%", background: "black", color: "white" }}
              >
                CONSTRUIRE
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SelectionNodeSlotMenu;
