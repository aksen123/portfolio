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
      state.formArray.push(projectData[action.payload.index]);
    },
    closeForm(state, action: PayloadAction<{ index: number }>) {
      // state.formArray = state.formArray.filter((form,i) => i !== action.payload.index);
      state.formArray.splice(action.payload.index, 1);
    },
    formToggle(state, action: PayloadAction<{ id: number }>) {},
    formPosition(
      state,
      action: PayloadAction<{ idx: number; x: number; y: number }>
    ) {
      state.formArray[action.payload.idx].position.x = action.payload.x
      state.formArray[action.payload.idx].position.y = action.payload.y
    },
  },
});

export default formSlice.reducer;
export const { select, openForm, closeForm, formToggle, formPosition } =
  formSlice.actions;