import { SelectPayload } from "../_actions/selection";
import NodeModel from "../../_models/Node";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import NodeSlotModel from "../../_models/NodeSlot";
import { addNode } from "./nodes";
import EdgeModel from "../../_models/Edge";

export type SelectionType = "node" | "node-slot" | "edge-model";

export type Selection = {
  item: NodeModel | NodeSlotModel | EdgeModel;
  type: SelectionType;
};

export type SelectionState = {
  current?: Selection;
};

const initialState: SelectionState = {};

export const selectionSlice = createSlice({
  name: "selection",
  initialState,
  reducers: {
    select: (state, action: PayloadAction<SelectPayload>) => {
      const { current } = state;
      const { next } = action.payload;
      return {
        ...state,
        current: next?.item.id === current?.item.id ? undefined : next,
      };
    },
  },
  extraReducers: (builder) =>
    builder.addCase(addNode, (state, action) => {
      const { node } = action.payload;
      return {
        ...state,
        current: {
          item: node,
          type: "node",
        },
      };
    }),
});

export const { select } = selectionSlice.actions;

export const currentSelectionSelector = (state: RootState) =>
  state.selection.current;

export default selectionSlice.reducer;
