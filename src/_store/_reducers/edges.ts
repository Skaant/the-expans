import { createSlice, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../store";
import EdgeModel from "../../_models/Edge";
import { addNode } from "./nodes";
import { EDGE_FEATURES } from "../../_data/edges";

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
          id: nanoid(),
          a: {
            x: source.x,
            y: source.y,
          },
          b: {
            x: node.x,
            y: node.y,
          },
          features:
            Math.random() * 5 > 2
              ? Math.random() * 2 > 1
                ? [EDGE_FEATURES.POND]
                : [EDGE_FEATURES.BERRIES]
              : undefined,
        },
      ];
    }),
});

// export const {} = edgesSlice.actions;

export const edgesSelector = (state: RootState) => state.edges;

export default edgesSlice.reducer;
