import { configureStore } from "@reduxjs/toolkit";
import placeReducer from "./place/placeReducer";

export const store = configureStore({
  reducer: {
    place: placeReducer,
  },
});
