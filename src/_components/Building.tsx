import * as React from "react";
import { BUILDINGS } from "../_data/buildings";
import Coords from "../_models/Coords";
import BuildingDataModel from "../_models/data/Building";
import { useAppSelector } from "../_store/hooks";
import { langSelector } from "../_store/_reducers/app";
import KolosSeedIcon from "./_icons/KoloSeed.icon";

function Building({
  x,
  y,
  building,
}: Coords & {
  building: BuildingDataModel;
  selected?: boolean;
}) {
  const lang = useAppSelector(langSelector);
  return (
    <>
      <text x={x} y={y - 48} textAnchor="middle">
        {building.name[lang]}
      </text>
      {building.id === BUILDINGS.KOLOS_SEED && <KolosSeedIcon x={x} y={y} />}
    </>
  );
}

export default Building;
