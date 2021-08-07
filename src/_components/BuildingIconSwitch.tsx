import * as React from "react";
import { BUILDINGS } from "../_data/buildings";
import KolosSeedIcon from "./_icons/KoloSeed.icon";
import WellIcon from "./_icons/Well.icon";
import IconPropsModel from "./_icons/_models/IconProps";

function BuildingIconSwitch({
  buildingId,
  ...iconProps
}: { buildingId: BUILDINGS } & IconPropsModel) {
  switch (buildingId) {
    case BUILDINGS.KOLOS_SEED:
      return <KolosSeedIcon {...iconProps} />;
    case BUILDINGS.WELL:
      return <WellIcon {...iconProps} />;
    default:
      return <></>;
  }
}

export default BuildingIconSwitch;
