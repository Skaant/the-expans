import NodeModel from "../../_models/Node";
import NodeSlotModel from "../../_models/NodeSlot";
export interface SelectPayload {
  selection?: NodeModel | NodeSlotModel;
}
