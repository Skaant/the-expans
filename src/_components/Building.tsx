import * as React from "react";
import { BUILDINGS } from "../_data/buildings";
import Coords from "../_models/Coords";
import BuildingDataModel from "../_models/data/Building";
import { useAppSelector } from "../_store/hooks";
import { langSelector } from "../_store/_reducers/app";
import BuildingIconSwitch from "./BuildingIconSwitch";

function Building({
  x,
  y,
  building,
}: Coords & {
  building: BuildingDataModel;
  selected?: boolean;
}) {
  const lang = useAppSelector(langSelector);
  const { id, name } = building;
  return (
    <>
      <text x={x} y={y - 48} textAnchor="middle">
        {name[lang]}
      </text>
      {id === BUILDINGS.KOLOS_SEED && (
        <BuildingIconSwitch buildingId={id} x={x} y={y} />
      )}
    </>
  );
}

export default Building;
