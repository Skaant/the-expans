import * as React from "react";
import BUILDINGS_DATA from "../_data/buildings";
import { LANGS } from "../_data/langs";
import RESSOURCES from "../_data/ressources";
import { useAppDispatch, useAppSelector } from "../_store/hooks";
import { langSelector, setLang } from "../_store/_reducers/app";
import { nodesSelector } from "../_store/_reducers/nodes";

function TopBar() {
  const lang = useAppSelector(langSelector);
  const nodes = useAppSelector(nodesSelector);
  const dispatch = useAppDispatch();
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
        justifyContent: "space-between",
        background: "black",
        color: "white",
        padding: "8px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex" }}>
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
      <div style={{ display: "flex" }}>
        {Object.values(LANGS).map((_lang) => (
          <div
            style={{
              margin: "0 8px",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
            key={_lang}
            onClick={() => dispatch(setLang({ lang: _lang as LANGS }))}
          >
            {_lang === lang ? <b>{_lang}</b> : <>{_lang}</>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopBar;
