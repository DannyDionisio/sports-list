import { combineReducers } from "@reduxjs/toolkit";
import { sportsReducer } from "./sportsReducer";

export const rootReducer = combineReducers({
  sports: sportsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
