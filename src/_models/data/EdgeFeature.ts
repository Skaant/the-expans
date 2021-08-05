import { EDGE_FEATURES } from "../../_data/edges";
import LangAlt from "../langs/LangAlt";
import SystemPuts from "./SystemPuts";

type EdgeFeatureModel = {
  id: EDGE_FEATURES;
  name: LangAlt;
} & SystemPuts;

export default EdgeFeatureModel;
