import * as React from "react";
import RESSOURCES from "../../_data/ressources";
import ResourcesAmountModel from "../../_models/data/ResourcesAmount";
import ResourceIconSwitch from "../ResourceIconSwitch";
import { ICON_SIZES } from "../_icons/_models/IconProps";
import "./resources-amount.css";

function ResourcesAmount({
  resourcesAmount,
}: {
  resourcesAmount: ResourcesAmountModel;
}) {
  return (
    <>
      {Object.values(RESSOURCES)
        .filter((resourceId) => resourcesAmount[resourceId])
        .map((resourceId) => (
          <span key={resourceId} className="resources-amount__item">
            {resourcesAmount[resourceId]}
            <ResourceIconSwitch
              resourceId={resourceId}
              x={0}
              y={0}
              size={ICON_SIZES.SM}
            />
          </span>
        ))}
    </>
  );
}

export default ResourcesAmount;
