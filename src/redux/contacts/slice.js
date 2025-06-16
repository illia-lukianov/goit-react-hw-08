import { createSlice } from '@reduxjs/toolkit';
import { patchContact } from './operations';

const handlePending = (state) => {
  state.loading = true;
};
const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase('contacts/fetchAll/pending', handlePending)
      .addCase('contacts/fetchAll/rejected', handleRejected)
      .addCase('contacts/fetchAll/fulfilled', (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase('contacts/deleteContact/pending', handlePending)
      .addCase('contacts/deleteContact/rejected', handleRejected)
      .addCase('contacts/deleteContact/fulfilled', (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload,
        );
        state.error = null;
      })
      .addCase('contacts/addContact/pending', handlePending)
      .addCase('contacts/addContact/rejected', handleRejected)
      .addCase('contacts/addContact/fulfilled', (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
        state.error = null;
      })
      .addCase(patchContact.pending, handlePending)
      .addCase(patchContact.rejected, handleRejected)
      .addCase(patchContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item,
        );
      });
  },
});

export default slice.reducer;
