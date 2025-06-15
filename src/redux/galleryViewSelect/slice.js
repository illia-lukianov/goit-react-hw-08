import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'galleryViewSelect',
  initialState: {
    galleryListIsOpen: false,
    galleryView: 'list',
  },
  reducers: {
    changeView: (state, action) => {
      state.galleryView = action.payload;
      state.galleryListIsOpen = false;
    },
    openSelect: (state) => {
      state.galleryListIsOpen = true;
    },
    closeSelect: (state) => {
      state.galleryListIsOpen = false;
    },
  },
});

export default slice.reducer;
export const { openSelect, closeSelect, changeView } = slice.actions;
