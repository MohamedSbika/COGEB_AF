import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  saveProjects: [],
};

const saveSlice = createSlice({

  name: "saved_projects",
  initialState,
  
  reducers: {
    handleProjectSave: (state, action) => {
      state.saveProjects.push(action.payload);
    },
    handleProjectRemove: (state, action) => {
      state.saveProjects = action.payload;
    },
    clearSavedProject: (state) => {
      state.saveProjects = [];
    },
  },
});

export const { handleProjectSave, handleProjectRemove,clearSavedProject } = saveSlice.actions;

export default saveSlice.reducer;
