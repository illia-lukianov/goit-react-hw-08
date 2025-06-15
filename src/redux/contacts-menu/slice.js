import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'contactsMenu',
  initialState: {
    menuIsOpen: false,
  },

  reducers: {
    openMenu: (state) => {
      state.menuIsOpen = true;
    },
    closeMenu: (state) => {
      state.menuIsOpen = false;
    },
  },
});

export const { openMenu, closeMenu } = slice.actions;
export default slice.reducer;
