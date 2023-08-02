import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from './toggleSlice'

export let store = configureStore({
  reducer: {
    toggle: toggleSlice
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
