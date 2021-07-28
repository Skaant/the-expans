import { AddNodePayload, ADD_NODE } from "../_actions/nodes";
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
    addNode: (state, action: PayloadAction<AddNodePayload>) => {
      if (action.type === ADD_NODE) {
        return [...state, action.payload.node];
      }
      return state;
    },
  },
});

export const { addNode } = nodesSlice.actions;

export const nodesSelector = (state: RootState) => state.nodes;

export default nodesSlice.reducer;
