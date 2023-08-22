import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { projectData, ProjectType } from "../data/data";


type InitType = {
  formArray: ProjectType[];
  form_zIndex:number;
};

const initialState: InitType = {
  formArray: [],
  form_zIndex: 0,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    select(state, action: PayloadAction<{ id: number; index: number }>) {
      state.formArray[action.payload.index] = {
        ...projectData[action.payload.id],
        position: { ...state.formArray[action.payload.index].position },
      };
    },
    openForm(state, action: PayloadAction<{ index: number }>) {
      state.formArray = state.formArray.map(
        (form) => ({ ...form, active: false })
      );
      state.formArray.push({...projectData[action.payload.index], zIndex: ++state.form_zIndex});
    },
    openProject(state, action: PayloadAction<{ id: number }>) {
      state.formArray = state.formArray.map(
        (form) => ({ ...form, active: false })
      );
      state.formArray.push({...projectData[action.payload.id], zIndex: ++state.form_zIndex, type: 'PROJECT', screenToggle : true})
    },
    closeForm(state, action: PayloadAction<{ index: number }>) {
      state.formArray = state.formArray.filter((form,i) => i !== action.payload.index);
      // state.formArray.splice(action.payload.index, 1);
    },
    fullscreen(state, action: PayloadAction<{ id: number }>) {
      state.formArray[action.payload.id].screenToggle =
        !state.formArray[action.payload.id].screenToggle;
    },
    hideForm(state, action: PayloadAction<{ idx: number }>) {
      const i = action.payload.idx;
      state.formArray[i].hide = !state.formArray[i].hide;
      state.formArray[i].active = state.formArray[i].active ? false: false;
    },
    formPosition(
      state,
      action: PayloadAction<{ idx: number; x: number; y: number }>
    ) {
      state.formArray[action.payload.idx].position.x = action.payload.x;
      state.formArray[action.payload.idx].position.y = action.payload.y;
    },
    activeTab(state, action: PayloadAction<{ idx: number }>) {
      state.formArray = state.formArray.map((form, i) =>
        i == action.payload.idx
          ? { ...form, active: form.active ? true : !form.active, zIndex: ++state.form_zIndex }
          : { ...form, active: false }
      );
    },
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
  hideForm,
  openProject
} = formSlice.actions;
