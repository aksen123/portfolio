import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
type StateType = {
  startMenuToggle: boolean;
  subMenu: boolean;
  iconValue: string
};
type PayloadType = {
  value:string
}
const initialState: StateType = {
  startMenuToggle: false,
  subMenu: false,
  iconValue : ''
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleStartMenu(state:StateType,action:PayloadAction<PayloadType>) {
      state.startMenuToggle = !state.startMenuToggle;
      state.subMenu = state.startMenuToggle == false? false : state.subMenu
      state.iconValue = action.payload.value
    },
    toggleSubmenu(state:StateType, action:PayloadAction<PayloadType>) {
      state.subMenu = !state.subMenu;
      state.iconValue = action.payload.value
    },
    hideMenu(state:StateType,action:PayloadAction<PayloadType>) {
      state.startMenuToggle = false; 
      state.subMenu = false;
      state.iconValue = action.payload.value
    },
    toggleIcon(state, action:PayloadAction<PayloadType>) {
      state.iconValue = action.payload.value
    }
  },
});

export default toggleSlice.reducer;

export const { toggleStartMenu, toggleSubmenu, hideMenu,toggleIcon } = toggleSlice.actions;

export type ActionType = ReturnType<typeof toggleSlice.reducer> 