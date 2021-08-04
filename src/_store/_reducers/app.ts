import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LANGS } from "../../_data/langs";
import { RootState } from "../store";
import { SetLangPayload } from "../_actions/app";

export type AppState = {
  lang: LANGS;
};

const initialState: AppState = {
  lang: LANGS.FR,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<SetLangPayload>) => ({
      ...state,
      lang: action.payload.lang,
    }),
  },
});

export const { setLang } = appSlice.actions;

export const langSelector = (state: RootState) => state.app.lang;

export default appSlice.reducer;
