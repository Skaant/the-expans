import { DIRECTIONS } from "../_data/directions";
import Coords from "./Coords";
import NodeModel from "./Node";

type NodeSlotModel = Coords & {
  id: string;
  direction: DIRECTIONS;
  /** Node from which slot is emitted. */
  source: NodeModel;
};

export default NodeSlotModel;
