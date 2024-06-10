import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSlice";
import formReducer from "./formSlice";
import todoSlice from "./todoSlice";
export let store = configureStore({
  reducer: {
    toggle: toggleReducer,
    form: formReducer,
    todo: todoSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
