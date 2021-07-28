import { SelectPayload } from "../_actions/selection";
import NodeModel from "../../_models/Node";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface SelectionState {
  current?: NodeModel;
}

const initialState: SelectionState = {};

export const selectionSlice = createSlice({
  name: "selection",
  initialState,
  reducers: {
    select: (state, action: PayloadAction<SelectPayload>) => {
      const { selection } = action.payload;
      return {
        ...state,
        current: selection,
      };
    },
  },
});

export const { select } = selectionSlice.actions;

export const currentSelectionSelector = (state: RootState) =>
  state.selection.current;

export default selectionSlice.reducer;
