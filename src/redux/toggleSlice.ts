import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
type StateType = {
  startMenuToggle: boolean;
  subMenu: boolean;
  iconValue: string;
  formToggle: boolean
};
type PayloadType = {
  value:string
}
const initialState: StateType = {
  startMenuToggle: false,
  subMenu: false,
  iconValue : '',
  formToggle: false
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleStartMenu(state,action:PayloadAction<PayloadType>) {
      state.startMenuToggle = !state.startMenuToggle;
      state.subMenu = state.startMenuToggle == false? false : state.subMenu
      state.iconValue = action.payload.value
    },
    toggleSubmenu(state, action:PayloadAction<PayloadType>) {
      state.subMenu = !state.subMenu;
      state.iconValue = action.payload.value
    },
    hideMenu(state,action:PayloadAction<PayloadType>) {
      state.startMenuToggle = false; 
      state.subMenu = false;
      state.iconValue = action.payload.value
    },
    clickIcon(state, action:PayloadAction<PayloadType>) {
      state.iconValue = action.payload.value
    },
    toggleScreen(state) {
      state.formToggle = !state.formToggle
    }
  },
});

export default toggleSlice.reducer;

export const { toggleStartMenu, toggleSubmenu, hideMenu,clickIcon,toggleScreen } = toggleSlice.actions;

export type ActionType = ReturnType<typeof toggleSlice.reducer> 