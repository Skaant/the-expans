import NodeModel from "../../_models/Node";

export const SELECT = "SELECT";
export interface SelectPayload {
  selection?: NodeModel;
}
