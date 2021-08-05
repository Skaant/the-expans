import React, { useState } from "react";
import { LANGS } from "../../../_data/langs";
import BuildingDataModel from "../../../_models/data/Building";
import LangDictionnary from "../../../_models/langs/LangDictionary";
import { useAppSelector } from "../../../_store/hooks";
import { langSelector } from "../../../_store/_reducers/app";

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
  const [collapse, setCollapse] = useState(true);
  return (
    <div onClick={() => setCollapse(!collapse)}>
      <p className="selection-title">{langs["building"][lang]}</p>
      <h2>{building.name[lang]}</h2>
      <p>{building.description[lang]}</p>
      {!collapse && (
        <>
          {building.inputs?.map((input, index) => (
            <p key={`input-${building.id}-${index}`}>
              -{input.amount} {input.ressourceId}
            </p>
          ))}
          {building.outputs?.map((output, index) => (
            <p key={`${building.id}-${index}`}>
              +{output.amount} {output.ressourceId}
            </p>
          ))}
        </>
      )}
    </div>
  );
}

export default SelectionNodeRightBuilding;
