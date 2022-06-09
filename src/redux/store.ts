import { configureStore, MiddlewareArray } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { rootReducer } from "./reducers/rootReducer";
import logger from "redux-logger";

export const store = configureStore({
  reducer: rootReducer,
  middleware: new MiddlewareArray().concat(logger),
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
