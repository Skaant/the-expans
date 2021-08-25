import { DIRECTIONS } from "../_data/directions";
import { EDGE_TYPES } from "../_data/edges";
import NodeModel from "./Node";

type EdgeSlotModel = {
  source: NodeModel;
  direction: DIRECTIONS;
  type: EDGE_TYPES;
};

export default EdgeSlotModel;
