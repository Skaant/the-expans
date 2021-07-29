import BuildingDataModel from "../_models/data/Building";

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
  },
  [BUILDINGS.SHRINE]: {
    id: BUILDINGS.SHRINE,
    name: "SHRINE",
  },
  [BUILDINGS.DOM]: {
    id: BUILDINGS.DOM,
    name: "DOM",
    radiusModifier: 1.5,
  },
  [BUILDINGS.GRAV_POINT]: {
    id: BUILDINGS.GRAV_POINT,
    name: "GRAV POINT",
    radiusModifier: 2,
  },
} as { [key in BUILDINGS]: BuildingDataModel };
