import { nanoid } from "@reduxjs/toolkit";
import * as React from "react";
import BUILDINGS_DATA, { BUILDINGS } from "../../_data/buildings";
import Coords from "../../_models/Coords";
import NodeModel from "../../_models/Node";
import { useAppDispatch } from "../../_store/hooks";
import { addNode } from "../../_store/_reducers/nodes";

function SelectionNodeSlotMenu({
  source,
  x,
  y,
}: Coords & {
  source: NodeModel;
}) {
  const dispatch = useAppDispatch();
  return (
    <>
      <p>CONSTRUIRE UN BÂTIMENT</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {[BUILDINGS.WELL, BUILDINGS.FARM, BUILDINGS.DOM].map((buildingId) => {
          const { name, inputs, outputs } = BUILDINGS_DATA[buildingId];
          return (
            <div
              key={buildingId}
              style={{
                width: "33%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "4px",
                cursor: "pointer",
              }}
              onClick={() =>
                dispatch(
                  addNode({
                    source,
                    node: {
                      id: nanoid(),
                      x,
                      y,
                      buildingId,
                    },
                  })
                )
              }
            >
              <div>
                <h3>{name}</h3>
                {inputs?.map(({ ressourceId, amount }) => (
                  <p key={ressourceId + "-" + amount} style={{ margin: 0 }}>
                    -{amount} {ressourceId}
                  </p>
                ))}
                {outputs?.map(({ ressourceId, amount }) => (
                  <p key={ressourceId + "-" + amount} style={{ margin: 0 }}>
                    +{amount} {ressourceId}
                  </p>
                ))}
              </div>
              <button
                type="button"
                style={{ width: "100%", background: "black", color: "white" }}
              >
                BUILD
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SelectionNodeSlotMenu;
