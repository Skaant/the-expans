import { DIRECTIONS } from "../_data/directions";
import { EDGE_TYPES } from "../_data/edges";

type EdgeSlotModel = {
  id: string;
  sourceId: string;
  direction: DIRECTIONS;
  type: EDGE_TYPES;
};

export default EdgeSlotModel;
