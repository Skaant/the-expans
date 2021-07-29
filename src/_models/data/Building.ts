import { BUILDINGS } from "../../_data/buildings";

type BuildingDataModel = {
  id: BUILDINGS;
  name: string;
  radiusModifier?: number;
  strokeColor?: string;
};

export default BuildingDataModel;
