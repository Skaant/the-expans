import { SelectPayload } from "../_actions/selection";
import NodeModel from "../../_models/Node";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import NodeSlotModel from "../../_models/NodeSlot";

export type SelectionType = "node" | "node-slot";

export type Selection = {
  item: NodeModel | NodeSlotModel;
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
});

export const { select } = selectionSlice.actions;

export const currentSelectionSelector = (state: RootState) =>
  state.selection.current;

export default selectionSlice.reducer;
