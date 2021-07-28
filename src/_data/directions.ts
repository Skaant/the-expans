import Coords from "../_models/Coords";
import { BASE_EDGE_SIZE, COS_30, SIN_30 } from "./primordials";

export enum DIRECTIONS {
  N = 'n',
  NE = 'ne',
  EN = 'en',
  E = 'e',
  ES = 'es',
  SE = 'se',
  S = 's',
  SW = 'sw',
  WS = 'ws',
  W = 'w',
  WN = 'wn',
  NW = 'nw'
};

export const DIRECTIONS_MODIFIERS: {[key in DIRECTIONS]: Coords} = {
  [DIRECTIONS.N]: {
    x: 0,
    y: BASE_EDGE_SIZE,
  },
  [DIRECTIONS.NE]: {
    x: BASE_EDGE_SIZE * SIN_30,
    y: BASE_EDGE_SIZE * COS_30,
  },
  [DIRECTIONS.EN]: {
    x: BASE_EDGE_SIZE * COS_30,
    y: BASE_EDGE_SIZE * SIN_30,
  },
  [DIRECTIONS.E]: {
    x: BASE_EDGE_SIZE,
    y: 0,
  },
  [DIRECTIONS.ES]: {
    x: BASE_EDGE_SIZE * COS_30,
    y: -BASE_EDGE_SIZE * SIN_30,
  },
  [DIRECTIONS.SE]: {
    x: BASE_EDGE_SIZE * SIN_30,
    y: -BASE_EDGE_SIZE * COS_30,
  },
  [DIRECTIONS.S]: {
    x: 0,
    y: -BASE_EDGE_SIZE,
  },
  [DIRECTIONS.SW]: {
    x: -BASE_EDGE_SIZE * COS_30,
    y: -BASE_EDGE_SIZE * SIN_30,
  },
  [DIRECTIONS.WS]: {
    x: -BASE_EDGE_SIZE * SIN_30,
    y: -BASE_EDGE_SIZE * COS_30,
  },
  [DIRECTIONS.W]: {
    x: -BASE_EDGE_SIZE,
    y: 0,
  },
  [DIRECTIONS.WN]: {
    x: -BASE_EDGE_SIZE * COS_30,
    y: BASE_EDGE_SIZE * SIN_30,
  },
  [DIRECTIONS.NW]: {
    x: -BASE_EDGE_SIZE * SIN_30,
    y: BASE_EDGE_SIZE * COS_30,
  },
};
