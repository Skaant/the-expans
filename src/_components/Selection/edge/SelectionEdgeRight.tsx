import * as React from "react";
import { EDGE_FEATURES_DATA } from "../../../_data/edges";
import { LANGS } from "../../../_data/langs";
import EdgeModel from "../../../_models/Edge";
import LangDictionnary from "../../../_models/langs/LangDictionary";
import { useAppSelector } from "../../../_store/hooks";
import { langSelector } from "../../../_store/_reducers/app";
import getTotalSystemsPuts from "../../../_utils/getTotalSystemsPuts";
import ResourcesAmount from "../../ResourcesAmount";

const langs: LangDictionnary = {
  features: {
    [LANGS.FR]: "Caractéristique(s)",
    [LANGS.EN]: "Feature(s)",
  },
  noFeature: {
    [LANGS.FR]: "Pas de caractéristique (pour le moment).",
    [LANGS.EN]: "No feature (at this time).",
  },
  resources: {
    [LANGS.FR]: "Total des ressources",
    [LANGS.EN]: "Resources total",
  },
};

function SelectionEdgeRight({ edge }: { edge: EdgeModel }) {
  const lang = useAppSelector(langSelector);
  const resourcesAmount = getTotalSystemsPuts(
    edge.features?.map((featureId) => EDGE_FEATURES_DATA[featureId])
  );
  return (
    <>
      <p className="selection-title">{langs.features[lang]}</p>
      {edge.features && edge.features.length > 0 ? (
        <>
          <p>
            {edge.features?.map((featureId) => {
              const edge = EDGE_FEATURES_DATA[featureId];
              return (
                <span key={featureId}>
                  <b>{edge.name[lang]}</b>{" "}
                  <ResourcesAmount
                    resourcesAmount={getTotalSystemsPuts([edge])}
                  />
                </span>
              );
            })}
          </p>
          <p className="selection-title">{langs.resources[lang]}</p>
          <p>
            <ResourcesAmount resourcesAmount={resourcesAmount} />
          </p>
        </>
      ) : (
        <p>{langs.noFeature[lang]}</p>
      )}
    </>
  );
}

export default SelectionEdgeRight;
