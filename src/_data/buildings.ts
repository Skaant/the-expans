import BuildingDataModel from "../_models/data/Building";
import RESSOURCES from "./ressources";

export enum BUILDINGS {
  KOLOS_SEED = "kolos-seed",
  WELL = "well",
  FARM = "farm",
  DOM = "dom",
  SHRINE = "shrine",
  GRAV_POINT = "grav-point",
  HOLY_CITY = "holy-city",
}

const BUILDINGS_DATA = {
  [BUILDINGS.KOLOS_SEED]: {
    id: BUILDINGS.KOLOS_SEED,
    name: "KOLOS-SEED",
    description:
      "It felt to the sky, bringing just enough to start a new colony.",
    outputs: [
      {
        ressourceId: RESSOURCES.ZUMS,
        type: "static",
        amount: 6,
      },
      {
        ressourceId: RESSOURCES.JING,
        type: "static",
        amount: 2,
      },
      {
        ressourceId: RESSOURCES.WA,
        type: "static",
        amount: 2,
      },
    ],
  },
  [BUILDINGS.WELL]: {
    id: BUILDINGS.WELL,
    name: "Well",
    description:
      "Uses the power of ZUMS and JING to extract WA from the air and ground.",
    inputs: [
      {
        ressourceId: RESSOURCES.ZUMS,
        amount: 2,
      },
      {
        ressourceId: RESSOURCES.JING,
        amount: 1,
      },
    ],
    outputs: [
      {
        ressourceId: RESSOURCES.WA,
        type: "static",
        amount: 4,
      },
    ],
  },
  [BUILDINGS.FARM]: {
    id: BUILDINGS.FARM,
    name: "Farm",
    description: "ZUMS and WA associate to make the JING grow.",
    inputs: [
      {
        ressourceId: RESSOURCES.ZUMS,
        amount: 2,
      },
      {
        ressourceId: RESSOURCES.WA,
        amount: 1,
      },
    ],
    outputs: [
      {
        ressourceId: RESSOURCES.JING,
        type: "static",
        amount: 4,
      },
    ],
  },
  [BUILDINGS.DOM]: {
    id: BUILDINGS.DOM,
    name: "DOM",
    description: "WA and JING offer a comfortable living space for ZUMS.",
    radiusModifier: 1.5,
    inputs: [
      {
        ressourceId: RESSOURCES.WA,
        amount: 2,
      },
      {
        ressourceId: RESSOURCES.JING,
        amount: 2,
      },
    ],
    outputs: [
      {
        ressourceId: RESSOURCES.ZUMS,
        type: "static",
        amount: 6,
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
  [BUILDINGS.GRAV_POINT]: {
    id: BUILDINGS.GRAV_POINT,
    name: "GRAV POINT",
    radiusModifier: 2,
    outputs: [
      {
        ressourceId: RESSOURCES.JING,
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

export default BUILDINGS_DATA;
