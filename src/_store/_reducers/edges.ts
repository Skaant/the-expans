import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import EdgeModel from "../../_models/Edge";
import { addNode } from "./nodes";

export type EdgesState = EdgeModel[];

const initialState: EdgesState = [];

export const edgesSlice = createSlice({
  name: "edges",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(addNode, (state, action) => {
      const { source, node } = action.payload;
      return [
        ...state,
        {
          id: "path",
          a: {
            x: source.x,
            y: source.y,
          },
          b: {
            x: node.x,
            y: node.y,
          },
        },
      ];
    }),
});

// export const {} = edgesSlice.actions;

export const edgesSelector = (state: RootState) => state.edges;

export default edgesSlice.reducer;
