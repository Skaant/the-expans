import { AddNodePayload } from "../_actions/nodes";
import NodeModel from "../../_models/Node";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { BUILDINGS } from "../../_data/buildings";

export type NodesState = NodeModel[];

const initialState: NodesState = [
  {
    id: "8887987",
    x: 40,
    y: 80,
    buildingId: BUILDINGS.HOLY_CITY,
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
