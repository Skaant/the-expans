import { EDGE_FEATURES } from "../_data/edges";
import Segment from "./Segment";

type EdgeModel = Segment & {
  id: string;
  features?: EDGE_FEATURES[];
};

export default EdgeModel;
