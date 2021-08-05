import BuildingDataModel from "../_models/data/Building";
import { LANGS } from "./langs";
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
    name: {
      [LANGS.FR]: "Vaisseau-graine",
      [LANGS.EN]: "Seed-vessel",
    },
    description: {
      [LANGS.FR]:
        "Elle est tombée du ciel, apportant juste de quoi installer une nouvelle colonie.",
      [LANGS.EN]:
        "It felt from the sky, bringing just enough to start a new colony.",
    },
    outputs: [
      {
        ressourceId: RESSOURCES.ZUMS,
        amount: 6,
      },
      {
        ressourceId: RESSOURCES.JING,
        amount: 2,
      },
      {
        ressourceId: RESSOURCES.WA,
        amount: 2,
      },
    ],
  },
  [BUILDINGS.WELL]: {
    id: BUILDINGS.WELL,
    name: {
      [LANGS.FR]: "Puit",
      [LANGS.EN]: "Well",
    },
    description: {
      [LANGS.FR]:
        "Utilise le pouvoir des ZUMS et du JING pour extraire le WE de l'air et du sol.",
      [LANGS.EN]:
        "Uses the power of ZUMS and JING to extract WA from the air and ground.",
    },
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
        amount: 4,
      },
    ],
  },
  [BUILDINGS.FARM]: {
    id: BUILDINGS.FARM,
    name: {
      [LANGS.FR]: "Ferme",
      [LANGS.EN]: "Farm",
    },
    description: {
      [LANGS.FR]: "Les ZUMS et le WA s'associent pour faire pousser le JING.",
      [LANGS.EN]: "ZUMS and WA associate to make the JING grows.",
    },
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
        amount: 4,
      },
    ],
  },
  [BUILDINGS.DOM]: {
    id: BUILDINGS.DOM,
    name: {
      [LANGS.FR]: "DOM",
      [LANGS.EN]: "DOM",
    },
    description: {
      [LANGS.FR]:
        "Le WA et le JING offrent un espace de vie confortable pour les ZUMS.",
      [LANGS.EN]: "WA and JING offer a comfortable living space for ZUMS.",
    },
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
        amount: 6,
      },
    ],
  },
  /* [BUILDINGS.HOLY_CITY]: {
    id: BUILDINGS.HOLY_CITY,
    name: "HOLY CITY of Zumbaba",
    radiusModifier: 3,
    outputs: [
      {
        ressourceId: RESSOURCES.FAITH,
        
        amount: 4,
      },
      {
        ressourceId: RESSOURCES.DATA,
        
        amount: 0.5,
        relativeTo: RESSOURCES.ZUMS,
      },
      {
        ressourceId: RESSOURCES.ABS,
        
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
        
        amount: 5,
      },
      {
        ressourceId: RESSOURCES.GENO,
        
        amount: 2,
      },
      {
        ressourceId: RESSOURCES.DATA,
        
        amount: 1,
        relativeTo: RESSOURCES.ZUMS,
        constraints: ["adjacent"],
      },
    ],
  }, */
} as { [key in BUILDINGS]: BuildingDataModel };

export default BUILDINGS_DATA;
