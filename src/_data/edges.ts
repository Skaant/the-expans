import EdgeFeatureModel from "../_models/data/EdgeFeature";
import { LANGS } from "./langs";
import RESSOURCES from "./ressources";

export enum EDGE_TYPES {
  PLAIN = "plain",
  MOUNTAIN = "mountain",
  WATER = "water",
  SKIGH = "skigh",
}

export enum EDGE_FEATURES {
  HEALTHY_GREENS = "healthy-greens",
  RESURGENCE = "resurgence",
}

export const EDGE_FEATURES_DATA: { [key in EDGE_FEATURES]: EdgeFeatureModel } =
  {
    [EDGE_FEATURES.HEALTHY_GREENS]: {
      id: EDGE_FEATURES.HEALTHY_GREENS,
      name: {
        [LANGS.FR]: "Plantes comestibles",
        [LANGS.EN]: "Healthy greens",
      },
      outputs: [
        {
          ressourceId: RESSOURCES.JING,
          amount: 1,
        },
      ],
    },
    [EDGE_FEATURES.RESURGENCE]: {
      id: EDGE_FEATURES.RESURGENCE,
      name: {
        [LANGS.FR]: "Résurgence",
        [LANGS.EN]: "Resurgence",
      },
      outputs: [
        {
          ressourceId: RESSOURCES.WA,
          amount: 1,
        },
      ],
    },
  };
