import { createAsyncThunk } from '@reduxjs/toolkit';
import * as mockApi from '../../services/mock-api';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, { rejectWithValue }) => {
  try {
    const responce = await mockApi.fetchContacts();
    return responce.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const addContacts = createAsyncThunk('contacts/addcontact', async (contact, { rejectWithValue }) => {
  try {
    const responce = await mockApi.postContact(contact);
    return responce;
  } catch (error) {
    return rejectWithValue(error);
  }
})

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
  try {
    const responce = await mockApi.deleteContact(id);
    console.log(responce);
    return responce;
  } catch (error) {
    return rejectWithValue(error);
  }
})