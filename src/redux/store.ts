import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from './toggleSlice'
import formReducer from "./formSlice";

export let store = configureStore({
  reducer: {
    toggle: toggleReducer,
    form: formReducer
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
