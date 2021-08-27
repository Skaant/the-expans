import EdgeModel from "../../_models/Edge";
import NodeModel from "../../_models/Node";

export type AddEdgePayload = {
  edge: EdgeModel;
  node?: NodeModel;
};
