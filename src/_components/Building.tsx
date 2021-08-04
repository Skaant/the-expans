import * as React from "react";
import Coords from "../_models/Coords";
import BuildingDataModel from "../_models/data/Building";
import { useAppSelector } from "../_store/hooks";
import { langSelector } from "../_store/_reducers/app";

function Building({
  nodeId,
  x,
  y,
  building,
}: { nodeId: string } & Coords & {
    building?: BuildingDataModel;
    selected?: boolean;
  }) {
  const lang = useAppSelector(langSelector);
  return (
    <>
      <text x={x} y={y - 48} textAnchor="middle">
        {building ? building.name[lang] : ""}
      </text>
    </>
  );
}

export default Building;
