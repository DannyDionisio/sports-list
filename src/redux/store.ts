import { configureStore } from "@reduxjs/toolkit";
import sportsReducer from "../features/sports/sportsSlice";

export const store = configureStore({
  reducer: {
    sports: sportsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
