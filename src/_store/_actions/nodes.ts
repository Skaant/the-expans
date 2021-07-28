import NodeModel from "../../_interfaces/Node";

export const ADD_NODE = "ADD_NODE";
export interface AddNodePayload {
  node: NodeModel;
}
