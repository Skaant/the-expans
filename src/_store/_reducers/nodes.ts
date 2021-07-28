import { AddNodePayload } from "../_actions/nodes";
import NodeModel from "../../_interfaces/Node";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type NodesState = NodeModel[];

const initialState: NodesState = [
  {
    id: "HOLY CITY of Zumbaba",
    x: 40,
    y: 80,
  },
];

export const nodesSlice = createSlice({
  name: "nodes",
  initialState,
  reducers: {
    addNode: (state, action: PayloadAction<AddNodePayload>) => [
      ...state,
      action.payload.node
    ],
  },
});

export const { addNode } = nodesSlice.actions;

export const nodesSelector = (state: RootState) => state.nodes;

export default nodesSlice.reducer;
