import { DIRECTIONS } from "../_data/directions";
import { EDGE_TYPES } from "../_data/edges";
import EdgeSlotModel from "../_models/EdgeSlot";
import NodeModel, { NodeEdgesRosetteModel } from "../_models/Node";

function getNodeEdgesRosette(source: Omit<NodeModel, "edgesRosette">) {
  return Object.values(DIRECTIONS).reduce((rosette, direction) => {
    const rand = Math.round(Math.random() * 100);
    rosette[direction] = {
      type: "edge-slot",
      value: {
        sourceId: source.id,
        direction,
        type:
          rand < 70
            ? rand < 50
              ? EDGE_TYPES.PLAIN
              : EDGE_TYPES.MOUNTAIN
            : rand < 90
            ? EDGE_TYPES.WATER
            : EDGE_TYPES.SKIGH,
      } as EdgeSlotModel,
    };
    return rosette;
  }, {} as NodeEdgesRosetteModel);
}

export default getNodeEdgesRosette;
