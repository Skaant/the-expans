import EdgeFeatureModel from "../_models/data/EdgeFeature";
import { LANGS } from "./langs";
import RESSOURCES from "./ressources";

export enum EDGE_FEATURES {
  POND = "pond",
  BERRIES = "berries",
}

export const EDGE_FEATURES_DATA: { [key in EDGE_FEATURES]: EdgeFeatureModel } =
  {
    [EDGE_FEATURES.POND]: {
      id: EDGE_FEATURES.POND,
      name: {
        [LANGS.FR]: "Étang",
        [LANGS.EN]: "Pond",
      },
      outputs: [
        {
          ressourceId: RESSOURCES.WA,
          amount: 1,
        },
      ],
    },
    [EDGE_FEATURES.BERRIES]: {
      id: EDGE_FEATURES.BERRIES,
      name: {
        [LANGS.FR]: "Baies",
        [LANGS.EN]: "Berries",
      },
      outputs: [
        {
          ressourceId: RESSOURCES.JING,
          amount: 1,
        },
      ],
    },
  };
