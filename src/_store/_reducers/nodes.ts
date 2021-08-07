import { AddBuildingToNodePayload, AddNodePayload } from "../_actions/nodes";
import NodeModel from "../../_models/Node";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { BUILDINGS } from "../../_data/buildings";

export type NodesState = NodeModel[];

const initialState: NodesState = [
  {
    id: nanoid(),
    x: 0,
    y: 0,
    buildingId: BUILDINGS.KOLOS_SEED,
  },
];

export const nodesSlice = createSlice({
  name: "nodes",
  initialState,
  reducers: {
    addNode: (state: NodesState, action: PayloadAction<AddNodePayload>) => [
      ...state,
      action.payload.node,
    ],
    addBuildingToNode: (
      state: NodesState,
      action: PayloadAction<AddBuildingToNodePayload>
    ) => {
      const { node, buildingId } = action.payload;
      const nodeIndex = state.findIndex(({ id }) => id === node.id);
      return [
        ...state.slice(0, nodeIndex),
        {
          ...node,
          buildingId,
        },
        ...(nodeIndex + 1 < state.length ? state.slice(nodeIndex + 1) : []),
      ];
    },
  },
});

export const { addNode, addBuildingToNode } = nodesSlice.actions;

export const nodesSelector = (state: RootState) => state.nodes;

export default nodesSlice.reducer;
