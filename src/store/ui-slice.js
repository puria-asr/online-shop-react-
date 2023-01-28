import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  showMenu: false,
  showZoom: false,
  editBtnToggle_id: {
    btnshow: false,
    dataId: null,
  },
};
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showMenu(state) {
      state.showMenu = true;
    },
    hideMenu(state) {
      state.showMenu = false;
    },
    showZoom(state) {
      state.showZoom = true;
    },
    hideZoom(state) {
      state.showZoom = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
