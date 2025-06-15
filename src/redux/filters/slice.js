import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilterValue: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilterValue } = slice.actions;
export default slice.reducer;
