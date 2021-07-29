import Coords from "./Coords";

enum NODE_BUILDINGS {
  FOUNDATION_STONE = "foundation-stone",
}

type NodeModel = Coords & {
  id: string;
  building?: NODE_BUILDINGS;
}

export default NodeModel;
