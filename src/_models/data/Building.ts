import { BUILDINGS } from "../../_data/buildings";
import RESSOURCES from "../../_data/ressources";
import LangAlt from "../langs/LangAlt";

type InputItem = {
  ressourceId: RESSOURCES;
  amount: number;
};

type OutputItem = {
  ressourceId: RESSOURCES;
  amount: number;
};

type BuildingDataModel = {
  id: BUILDINGS;
  name: LangAlt;
  description: LangAlt;
  radiusModifier?: number;
  strokeColor?: string;
  inputs?: InputItem[];
  outputs?: OutputItem[];
};

export default BuildingDataModel;
