import { createReducer } from "@reduxjs/toolkit";
import { toggleTheme } from "./actions";

const currentTimestamp = () => new Date().getTime();

export interface UserState {
  timestamp: number;
  isDark: boolean;
}

export const initialState: UserState = {
  timestamp: currentTimestamp(),
  isDark: false,
};

export default createReducer(initialState, (builder) =>
  builder.addCase(toggleTheme, (state) => {
    state.isDark = !state.isDark;
  })
);
