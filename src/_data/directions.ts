import { BASE_EDGE_SIZE, COS_30, SIN_30 } from "./primordials";

export const DIRECTIONS = {
  ZERO: 0,
  UN: 30,
  DEUX: 60,
  TROIS: 90,
  QUATRE: 120,
  CINQ: 150,
  SIX: 180,
  SEPT: 210,
  HUIT: 240,
  NEUF: 270,
  DIX: 300,
  ONZE: 330,
};

export const DIRECTIONS_MODIFIERS = {
  [DIRECTIONS.ZERO]: {
    x: 0,
    y: BASE_EDGE_SIZE,
  },
  [DIRECTIONS.UN]: {
    x: BASE_EDGE_SIZE * SIN_30,
    y: BASE_EDGE_SIZE * COS_30,
  },
  [DIRECTIONS.DEUX]: {
    x: BASE_EDGE_SIZE * COS_30,
    y: BASE_EDGE_SIZE * SIN_30,
  },
  [DIRECTIONS.TROIS]: {
    x: BASE_EDGE_SIZE,
    y: 0,
  },
  [DIRECTIONS.QUATRE]: {
    x: BASE_EDGE_SIZE * COS_30,
    y: -BASE_EDGE_SIZE * SIN_30,
  },
  [DIRECTIONS.CINQ]: {
    x: BASE_EDGE_SIZE * SIN_30,
    y: -BASE_EDGE_SIZE * COS_30,
  },
  [DIRECTIONS.SIX]: {
    x: 0,
    y: -BASE_EDGE_SIZE,
  },
  [DIRECTIONS.SEPT]: {
    x: -BASE_EDGE_SIZE * COS_30,
    y: -BASE_EDGE_SIZE * SIN_30,
  },
  [DIRECTIONS.HUIT]: {
    x: -BASE_EDGE_SIZE * SIN_30,
    y: -BASE_EDGE_SIZE * COS_30,
  },
  [DIRECTIONS.NEUF]: {
    x: -BASE_EDGE_SIZE,
    y: 0,
  },
  [DIRECTIONS.DIX]: {
    x: -BASE_EDGE_SIZE * COS_30,
    y: BASE_EDGE_SIZE * SIN_30,
  },
  [DIRECTIONS.ONZE]: {
    x: -BASE_EDGE_SIZE * SIN_30,
    y: BASE_EDGE_SIZE * COS_30,
  },
};
