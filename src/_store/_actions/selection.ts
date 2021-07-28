import NodeModel from "../../_interfaces/Node";

export const SELECT = "SELECT";
export interface SelectPayload {
  selection?: NodeModel;
}
