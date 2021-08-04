import { BUILDINGS } from "../../_data/buildings";

import LangAlt from "../langs/LangAlt";
import ResourcePut from "./RessourcePut";

type BuildingDataModel = {
  id: BUILDINGS;
  name: LangAlt;
  description: LangAlt;
  radiusModifier?: number;
  strokeColor?: string;
  inputs?: ResourcePut[];
  outputs?: ResourcePut[];
};

export default BuildingDataModel;
