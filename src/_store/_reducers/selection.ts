import { SelectPayload } from "../_actions/selection";
import NodeModel from "../../_models/Node";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import EdgeModel from "../../_models/Edge";
import EdgeSlotModel from "../../_models/EdgeSlot";
import { addEdge } from "./edges";

export type SelectionType = "node" | "edge" | "edge-slot";

export type SelectionModel = {
  item: NodeModel | EdgeModel | EdgeSlotModel;
  type: SelectionType;
};

export type SelectionState = {
  current?: SelectionModel;
};

const initialState: SelectionState = {};

export const selectionSlice = createSlice({
  name: "selection",
  initialState,
  reducers: {
    select: (state, action: PayloadAction<SelectPayload>) => {
      const { current } = state;
      const { next, source } = action.payload;
      if (next?.item.id === current?.item.id) {
        if (current?.type === "edge-slot" && source) {
          return {
            ...state,
            current: {
              type: "node",
              item: source,
            },
          };
        } else {
          return { ...state, current: undefined };
        }
      } else {
        return { ...state, current: next };
      }
    },
  },
  extraReducers: (builder) =>
    builder.addCase(addEdge, (state, action) => {
      const { edge } = action.payload;
      return {
        ...state,
        current: {
          item: edge,
          type: "edge",
        },
      };
    }),
});

export const { select } = selectionSlice.actions;

export const currentSelectionSelector = (state: RootState) => {
  const current = state.selection.current;
  if (current) {
    const { item, type } = current;
    const { id } = item;
    /** /!\ HACK /!\
     *
     * For `node` and `edge`, selection
     * hold old reference to item while it is
     * updated in its own reducers.
     *
     * In order to clean it, selection should hold
     * only item's id (but it's not that simple thanks to
     * `node-slot` which only virtually exists). */
    switch (type) {
      case "node":
        return {
          type,
          item: state.nodes.find((node) => node.id === id),
        } as SelectionModel;
      case "edge":
        return {
          type,
          item: state.edges.find((edge) => edge.id === id),
        } as SelectionModel;
      case "edge-slot":
        return current;
    }
  }
  return current;
};

export default selectionSlice.reducer;
