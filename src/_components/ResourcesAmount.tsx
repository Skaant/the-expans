import * as React from "react";
import RESSOURCES from "../_data/ressources";
import ResourcesAmountModel from "../_models/data/ResourcesAmount";

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
          <span
            key={resourceId}
            style={{ marginRight: "6px", textTransform: "uppercase" }}
          >
            {resourcesAmount[resourceId]} ({resourceId})
          </span>
        ))}
    </>
  );
}

export default ResourcesAmount;
