// https://github.com/reduxjs/cra-template-redux-typescript/
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import selectionReducer from "./_reducers/selection";
import nodesReducer from "./_reducers/nodes";
import edgesReducer from "./_reducers/edges";

export const store = configureStore({
  reducer: {
    selection: selectionReducer,
    nodes: nodesReducer,
    edges: edgesReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
