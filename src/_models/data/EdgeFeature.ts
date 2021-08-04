import { EDGE_FEATURES } from "../../_data/edges";
import LangAlt from "../langs/LangAlt";
import ResourcePut from "./RessourcePut";

type EdgeFeatureModel = {
  id: EDGE_FEATURES;
  name: LangAlt;
  inputs?: ResourcePut[];
  outputs?: ResourcePut[];
};

export default EdgeFeatureModel;
