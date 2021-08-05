import { BUILDINGS } from "../../_data/buildings";

import LangAlt from "../langs/LangAlt";
import SystemPuts from "./SystemPuts";

type BuildingDataModel = {
  id: BUILDINGS;
  name: LangAlt;
  description: LangAlt;
  radiusModifier?: number;
  strokeColor?: string;
} & SystemPuts;

export default BuildingDataModel;
