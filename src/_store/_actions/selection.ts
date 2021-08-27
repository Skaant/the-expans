import NodeModel from "../../_models/Node";
import { SelectionModel } from "../_reducers/selection";
export interface SelectPayload {
  next?: SelectionModel;
  /** Back to node on edge-slot (re-de)selection. */
  source?: NodeModel;
}
