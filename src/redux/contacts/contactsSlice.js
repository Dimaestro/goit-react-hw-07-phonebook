import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContacts, deleteContacts } from "./contactsOperations";
import {  } from "./contactsOperations";

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    enteties: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.enteties = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addContacts.pending]: (state) => {
      state.isLoading = true;
    },
    [addContacts.fulfilled]: (state, action) => {
      state.enteties.push(action.payload);
      state.isLoading = false;
      state.error = null;
    },
    [addContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteContacts.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteContacts.fulfilled]: (state, action) => {
      const index = state.enteties.findIndex(item => item.id === action.payload);

      state.enteties.splice(index, 1);
      state.isLoading = false;
      state.error = null;
    },
    [deleteContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
})

export const {addContact, deleteContact} = contactsSlice.actions
export default contactsSlice;