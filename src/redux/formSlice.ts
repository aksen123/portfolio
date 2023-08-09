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
  name: 'form',
  initialState,
  reducers: {
    select(state, action:PayloadAction<{id: number, index: number }>) {
      state.formArray[action.payload.index] = projectData[action.payload.id]
    },
    openForm(state, action:PayloadAction<{index: number}>) {
      state.formArray.push(projectData[action.payload.index])
    },
    closeForm(state, action:PayloadAction<{index: number}>) {
      state.formArray = state.formArray.filter((form,i) => i !== action.payload.index)
    },
  }
})

export default formSlice.reducer;
export const {select,openForm,closeForm} = formSlice.actions