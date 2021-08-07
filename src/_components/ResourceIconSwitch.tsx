import * as React from "react";
import RESSOURCES, { RESSOURCES_DATA } from "../_data/ressources";
import JingIcon from "./_icons/Jing.icon";
import WaIcon from "./_icons/Wa.icon";
import ZumsIcon from "./_icons/Zums.icon";
import IconPropsModel from "./_icons/_models/IconProps";

function ResourceIconSwitch({
  resourceId,
  ...iconProps
}: { resourceId: RESSOURCES } & IconPropsModel) {
  const { color } = RESSOURCES_DATA[resourceId];
  const props: IconPropsModel = {
    ...iconProps,
    fill: color,
  };
  switch (resourceId) {
    case RESSOURCES.WA:
      return <WaIcon {...props} />;
    case RESSOURCES.JING:
      return <JingIcon {...props} />;
    case RESSOURCES.ZUMS:
      return <ZumsIcon {...props} />;
    default:
      return <></>;
  }
}

export default ResourceIconSwitch;
