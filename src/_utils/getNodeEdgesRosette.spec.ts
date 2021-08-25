import { nanoid } from "@reduxjs/toolkit";
import { DIRECTIONS } from "../_data/directions";
import { EDGE_TYPES } from "../_data/edges";
import EdgeSlotModel from "../_models/EdgeSlot";
import getNodeEdgesRosette from "./getNodeEdgesRosette";

describe("getNodeEdgesRosette", () => {
  test("Return an object made of EdgeSlotModel & keyed for each DIRECTIONS", () => {
    const edgesRosette = getNodeEdgesRosette({ x: 0, y: 0, id: nanoid() });
    expect(
      Object.values(DIRECTIONS).every(
        (direction) =>
          edgesRosette[direction].type === "edge-slot" &&
          [EDGE_TYPES.GROUND, EDGE_TYPES.GROUND_IMPRACTICABLE].includes(
            (edgesRosette[direction].value as EdgeSlotModel).type
          )
      )
    ).toEqual(true);
  });
});
