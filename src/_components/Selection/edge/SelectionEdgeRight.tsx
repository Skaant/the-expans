import * as React from "react";
import { EDGE_FEATURES_DATA } from "../../../_data/edges";
import { LANGS } from "../../../_data/langs";
import EdgeModel from "../../../_models/Edge";
import LangDictionnary from "../../../_models/langs/LangDictionary";
import { useAppSelector } from "../../../_store/hooks";
import { langSelector } from "../../../_store/_reducers/app";

const langs: LangDictionnary = {
  features: {
    [LANGS.FR]: "Caractéristique(s)",
    [LANGS.EN]: "Feature(s)",
  },
  noFeature: {
    [LANGS.FR]: "Pas de caractéristique (pour le moment).",
    [LANGS.EN]: "No feature (at this time).",
  },
};

function SelectionEdgeRight({ edge }: { edge: EdgeModel }) {
  const lang = useAppSelector(langSelector);
  return (
    <>
      <p className="selection-title">{langs.features[lang]}</p>
      <p>
        {edge.features && edge.features.length > 0
          ? edge.features
              ?.map((feature) => EDGE_FEATURES_DATA[feature].name[lang])
              .join(", ")
          : langs.noFeature[lang]}
      </p>
    </>
  );
}

export default SelectionEdgeRight;
