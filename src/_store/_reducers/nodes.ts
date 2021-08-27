import { AddBuildingToNodePayload } from "../_actions/nodes";
import NodeModel, { NodeClass } from "../../_models/Node";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { BUILDINGS } from "../../_data/buildings";
import { addEdge } from "./edges";

export type NodesState = NodeModel[];

const initialState: NodesState = [
  new NodeClass({ x: 0, y: 0, buildingId: BUILDINGS.KOLOS_SEED }),
];

export const nodesSlice = createSlice({
  name: "nodes",
  initialState,
  reducers: {
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
  extraReducers: (builder) =>
    builder.addCase(addEdge, (state, action) => {
      const node = action.payload.node;
      return node ? [...state, node] : state;
    }),
});

export const { addBuildingToNode } = nodesSlice.actions;

export const nodesSelector = (state: RootState) => state.nodes;

export default nodesSlice.reducer;
