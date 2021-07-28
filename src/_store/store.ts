// https://github.com/reduxjs/cra-template-redux-typescript/
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import selectionReducer from "./_reducers/selection";
import nodesReducer from "./_reducers/nodes";

export const store = configureStore({
  reducer: {
    selection: selectionReducer,
    nodes: nodesReducer,
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
