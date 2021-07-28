enum NODE_BUILDINGS {
  FOUNDATION_STONE = "foundation-stone",
}

interface NodeModel {
  id: string;
  x: number;
  y: number;
  building?: NODE_BUILDINGS;
}

export default NodeModel;
