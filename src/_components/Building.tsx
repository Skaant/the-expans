import * as React from "react";
import { BASE_NODE_RADIUS } from "../_data/primordials";
import Coords from "../_models/Coords";
import BuildingDataModel from "../_models/data/Building";
import { useAppSelector } from "../_store/hooks";
import { langSelector } from "../_store/_reducers/app";

function Building({
  nodeId,
  x,
  y,
  building,
  selected = false,
}: { nodeId: string } & Coords & {
    building?: BuildingDataModel;
    selected?: boolean;
  }) {
  const lang = useAppSelector(langSelector);
  const radius =
    BASE_NODE_RADIUS * ((building && building.radiusModifier) || 1);
  return (
    <>
      <text x={x} y={y - 70} textAnchor="middle">
        {building ? building.name[lang] : nodeId}
      </text>
      <circle
        cx={x}
        cy={y}
        r={radius}
        style={selected ? { stroke: "red", strokeWidth: 5 } : {}}
      />
    </>
  );
}

export default Building;
