import React from "react";
import { useMemo } from "react";
import { LANGS } from "../../../_data/langs";
import BuildingDataModel from "../../../_models/data/Building";
import LangDictionnary from "../../../_models/langs/LangDictionary";
import { useAppSelector } from "../../../_store/hooks";
import { langSelector } from "../../../_store/_reducers/app";
import getTotalSystemsPuts from "../../../_utils/getTotalSystemsPuts";
import ResourcesAmount from "../../ResourcesAmount";

const langs: LangDictionnary = {
  building: {
    [LANGS.FR]: "Bâtiment",
    [LANGS.EN]: "Building",
  },
};

function SelectionNodeRightBuilding({
  building,
}: {
  building: BuildingDataModel;
}) {
  const lang = useAppSelector(langSelector);
  const total = useMemo(() => getTotalSystemsPuts([building]), [building]);
  return (
    <div>
      <p className="selection-title">{langs["building"][lang]}</p>
      <h2>{building.name[lang]}</h2>
      <p>{building.description[lang]}</p>
      <p>
        <ResourcesAmount resourcesAmount={total} />
      </p>
    </div>
  );
}

export default SelectionNodeRightBuilding;
