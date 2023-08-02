import { createSlice } from "@reduxjs/toolkit";

type StateType = {
  startMenuToggle: boolean;
  subMenu: boolean;
};
const initialState: StateType = {
  startMenuToggle: false,
  subMenu: false,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleStartMenu(state) {
      state.startMenuToggle = !state.startMenuToggle;
      state.subMenu = state.startMenuToggle == false? false : state.subMenu 
    },
    toggleSubmenu(state) {
      state.subMenu = !state.subMenu;
    },
    hideMenu(state) {
      state.startMenuToggle = false; 
      state.subMenu = false;
    },
  },
});

export default toggleSlice.reducer;

export const { toggleStartMenu, toggleSubmenu, hideMenu } = toggleSlice.actions;

export type ActionType = ReturnType<typeof toggleSlice.reducer> 