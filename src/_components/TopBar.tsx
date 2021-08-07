import * as React from "react";
import BUILDINGS_DATA, { BUILDINGS } from "../_data/buildings";
import { EDGE_FEATURES, EDGE_FEATURES_DATA } from "../_data/edges";
import { LANGS } from "../_data/langs";
import { useAppDispatch, useAppSelector } from "../_store/hooks";
import { langSelector, setLang } from "../_store/_reducers/app";
import { edgesSelector } from "../_store/_reducers/edges";
import { nodesSelector } from "../_store/_reducers/nodes";
import getTotalSystemsPuts from "../_utils/getTotalSystemsPuts";
import ResourcesAmount from "./ResourcesAmount/ResourcesAmount";

function TopBar() {
  const lang = useAppSelector(langSelector);
  const nodes = useAppSelector(nodesSelector);
  const edges = useAppSelector(edgesSelector);
  const dispatch = useAppDispatch();
  const total = getTotalSystemsPuts([
    ...nodes
      .filter((node) => node.buildingId)
      .map((node) => BUILDINGS_DATA[node.buildingId as BUILDINGS]),
    ...edges
      .filter((edge) => edge.features)
      .map((edge) =>
        (edge.features as EDGE_FEATURES[]).map(
          (featureId) => EDGE_FEATURES_DATA[featureId]
        )
      )
      .flat(),
  ]);
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
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      <div>
        <ResourcesAmount resourcesAmount={total} />
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
