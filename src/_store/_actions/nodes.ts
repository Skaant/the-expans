import { BUILDINGS } from "../../_data/buildings";
import NodeModel from "../../_models/Node";

export type AddNodePayload = {
  source: NodeModel;
  node: NodeModel;
};

export type AddBuildingToNodePayload = {
  node: NodeModel;
  buildingId: BUILDINGS;
};
