import { nanoid } from "@reduxjs/toolkit";
import { BUILDINGS } from "../_data/buildings";
import { DIRECTIONS } from "../_data/directions";
import getNodeEdgesRosette from "../_utils/getNodeEdgesRosette";
import Coords from "./Coords";
import EdgeModel from "./Edge";
import EdgeSlotModel from "./EdgeSlot";

export type NodeEdgesRosette = {
  [key in DIRECTIONS]: EdgeModel | EdgeSlotModel;
};

type NodeModel = Coords & {
  id: string;
  buildingId?: BUILDINGS;
  edgesRosette?: NodeEdgesRosette;
};

export class NodeClass implements NodeModel {
  x: number;
  y: number;
  id: string;
  buildingId?: BUILDINGS;
  edgesRosette: NodeEdgesRosette;
  constructor({ x, y, buildingId }: Omit<NodeModel, "id">) {
    this.x = x;
    this.y = y;
    this.id = nanoid();
    this.buildingId = buildingId;
    this.edgesRosette = getNodeEdgesRosette(this);
  }
}

export default NodeModel;
