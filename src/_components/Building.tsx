import * as React from "react";
import { BASE_ICON_SIZE } from "../_data/primordials";
import Coords from "../_models/Coords";
import BuildingDataModel from "../_models/data/Building";
import { useAppSelector } from "../_store/hooks";
import { langSelector } from "../_store/_reducers/app";
import BuildingIconSwitch from "./BuildingIconSwitch";
import { ICON_SIZES } from "./_icons/_models/IconProps";

function Building({
  x,
  y,
  building,
}: Coords & {
  building: BuildingDataModel;
}) {
  const lang = useAppSelector(langSelector);
  const { id, name } = building;
  return (
    <>
      <text
        x={x}
        y={y - BASE_ICON_SIZE * 1.5}
        textAnchor="middle"
        style={{ textTransform: "uppercase" }}
      >
        {name[lang]}
      </text>
      <BuildingIconSwitch
        buildingId={id}
        x={x}
        y={y - BASE_ICON_SIZE * 0.5}
        size={ICON_SIZES.LG}
      />
    </>
  );
}

export default Building;
