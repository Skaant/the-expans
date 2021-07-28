import NodeModel from "../../_models/Node";

export const ADD_NODE = "ADD_NODE";
export interface AddNodePayload {
  node: NodeModel;
}
