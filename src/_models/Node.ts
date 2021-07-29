import { BUILDINGS } from "../_data/buildings";
import Coords from "./Coords";

type NodeModel = Coords & {
  id: string;
  buildingId?: BUILDINGS;
};

export default NodeModel;
