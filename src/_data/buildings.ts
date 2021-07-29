import BuildingDataModel from "../_models/data/Building";
import RESSOURCES from "./ressources";

export enum BUILDINGS {
  HOLY_CITY = "holy-city",
  SHRINE = "shrine",
  DOM = "dom",
  GRAV_POINT = "grav-point",
}

export default {
  [BUILDINGS.HOLY_CITY]: {
    id: BUILDINGS.HOLY_CITY,
    name: "HOLY CITY of Zumbaba",
    radiusModifier: 3,
    outputs: [
      {
        ressourceId: RESSOURCES.FAITH,
        type: "static",
        amount: 4,
      },
      {
        ressourceId: RESSOURCES.DATA,
        type: "relative",
        amount: 0.5,
        relativeTo: RESSOURCES.ZUMS,
      },
      {
        ressourceId: RESSOURCES.ABS,
        type: "relative",
        amount: 1,
        relativeTo: BUILDINGS.SHRINE,
      },
    ],
  },
  [BUILDINGS.SHRINE]: {
    id: BUILDINGS.SHRINE,
    name: "SHRINE",
    outputs: [
      {
        ressourceId: RESSOURCES.FAITH,
        type: "relative",
        amount: 1,
        relativeTo: RESSOURCES.ZUMS,
        constraints: ["adjacent"],
      },
    ],
  },
  [BUILDINGS.DOM]: {
    id: BUILDINGS.DOM,
    name: "DOM",
    radiusModifier: 1.5,
    outputs: [
      {
        ressourceId: RESSOURCES.ZUMS,
        type: "static",
        amount: 4,
      },
      {
        ressourceId: RESSOURCES.JING,
        type: "static",
        amount: 3,
      },
      {
        ressourceId: RESSOURCES.SPARK,
        type: "relative",
        amount: 1,
        relativeTo: BUILDINGS.SHRINE,
        constraints: ["adjacent"],
      },
    ],
  },
  [BUILDINGS.GRAV_POINT]: {
    id: BUILDINGS.GRAV_POINT,
    name: "GRAV POINT",
    radiusModifier: 2,
    outputs: [
      {
        ressourceId: RESSOURCES.BIO,
        type: "static",
        amount: 5,
      },
      {
        ressourceId: RESSOURCES.GENO,
        type: "static",
        amount: 2,
      },
      {
        ressourceId: RESSOURCES.DATA,
        type: "relative",
        amount: 1,
        relativeTo: RESSOURCES.ZUMS,
        constraints: ["adjacent"],
      },
    ],
  },
} as { [key in BUILDINGS]: BuildingDataModel };
