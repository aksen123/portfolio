import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { projectData, ProjectType } from "../data/data";

// type ProjectType = {
//   id: number;
//   title: string;
//   icon: string;
//   desc: string[];
//   project_img: string[];
//   url: string;
//   skill: string[];
// };
type InitType = {
  formArray : ProjectType[];
  selectData: ProjectType
}

const initialState:InitType = {
  formArray: [],
  selectData : projectData[0]
}


const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    select(state, action: PayloadAction<{ id: number; index: number }>) {
      state.formArray[action.payload.index] ={...projectData[action.payload.id], position: {...state.formArray[action.payload.index].position} }
    },
    openForm(state, action: PayloadAction<{ index: number }>) {
      state.formArray = state.formArray.map((form) => form = {...form, active: false})
      state.formArray.push(projectData[action.payload.index]);
    },
    closeForm(state, action: PayloadAction<{ index: number }>) {
      // state.formArray = state.formArray.filter((form,i) => i !== action.payload.index);
      state.formArray.splice(action.payload.index, 1);
    },
    fullscreen(state, action: PayloadAction<{ id: number }>) {
      state.formArray[action.payload.id].fullscreen = !state.formArray[action.payload.id].fullscreen
    },
    formPosition(
      state,
      action: PayloadAction<{ idx: number; x: number; y: number }>
    ) {
      state.formArray[action.payload.idx].position.x = action.payload.x
      state.formArray[action.payload.idx].position.y = action.payload.y
    },
    activeTab(state, action: PayloadAction<{idx : number}>) {
      state.formArray = state.formArray.map((form, i) => i == action.payload.idx ? {...form, active: true} : {...form, active: false})
      console.log(state.formArray)
    }
  },
});

export default formSlice.reducer;
export const {
  select,
  openForm,
  closeForm,
  fullscreen,
  formPosition,
  activeTab,
} = formSlice.actions;