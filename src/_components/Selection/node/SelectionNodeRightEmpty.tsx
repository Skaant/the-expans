import React from "react";
import BUILDINGS_DATA, { BUILDINGS } from "../../../_data/buildings";
import { LANGS } from "../../../_data/langs";
import LangDictionnary from "../../../_models/langs/LangDictionary";
import NodeModel from "../../../_models/Node";
import { useAppDispatch, useAppSelector } from "../../../_store/hooks";
import { langSelector } from "../../../_store/_reducers/app";
import { addBuildingToNode } from "../../../_store/_reducers/nodes";
import getTotalSystemsPuts from "../../../_utils/getTotalSystemsPuts";
import ResourcesAmount from "../../ResourcesAmount";

const langs: LangDictionnary = {
  title: {
    [LANGS.FR]: "Point vide",
    [LANGS.EN]: "Empty node",
  },
  action: {
    [LANGS.FR]: "Construisez un bâtiment",
    [LANGS.EN]: "Construct a building",
  },
};

function SelectionNodeRightEmpty({ node }: { node: NodeModel }) {
  const lang = useAppSelector(langSelector);
  const dispatch = useAppDispatch();
  return (
    <div>
      <p className="selection-title">{langs.title[lang]}</p>
      <h2>{langs.action[lang]}</h2>
      {[BUILDINGS.WELL, BUILDINGS.FARM, BUILDINGS.DOM].map((buildingId) => {
        const building = BUILDINGS_DATA[buildingId];
        return (
          <button
            key={buildingId}
            onClick={() => dispatch(addBuildingToNode({ node, buildingId }))}
          >
            {building.name[lang]}{" "}
            <ResourcesAmount
              resourcesAmount={getTotalSystemsPuts([building])}
            />
          </button>
        );
      })}
    </div>
  );
}

export default SelectionNodeRightEmpty;
