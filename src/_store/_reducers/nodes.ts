import { AddNodePayload } from "../_actions/nodes";
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
    addNode: (state, action: PayloadAction<AddNodePayload>) => [
      ...state,
      action.payload.node,
    ],
  },
});

export const { addNode } = nodesSlice.actions;

export const nodesSelector = (state: RootState) => state.nodes;

export default nodesSlice.reducer;
