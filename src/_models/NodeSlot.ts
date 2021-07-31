import Coords from "./Coords";
import NodeModel from "./Node";

type NodeSlotModel = Coords & {
  id: string;
  /** Node from which slot is emitted. */
  source: NodeModel;
};

export default NodeSlotModel;
