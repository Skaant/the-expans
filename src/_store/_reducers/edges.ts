import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import EdgeModel from "../../_models/Edge";
import { AddEdgePayload } from "../_actions/edges";

export type EdgesState = EdgeModel[];

const initialState: EdgesState = [];

export const edgesSlice = createSlice({
  name: "edges",
  initialState,
  reducers: {
    addEdge: (state: EdgesState, action: PayloadAction<AddEdgePayload>) => [
      ...state,
      action.payload.edge,
    ],
  },
});

export const { addEdge } = edgesSlice.actions;

export const edgesSelector = (state: RootState) => state.edges;

export default edgesSlice.reducer;
