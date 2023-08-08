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
  allData : ProjectType[];
  selectData: ProjectType
}

const initialState:InitType = {
  allData: projectData,
  selectData : projectData[0]
}


const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    select(state, action:PayloadAction<{index: number}>) {
      state.selectData = projectData[action.payload.index]
    }
  }
})

export default formSlice.reducer;
export const {select} = formSlice.actions