import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/services/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch/all',
  async (_, thunkAPI) => {
    try {
      const data = await api.getAllContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/add',
  async (data, thunkAPI) => {
    try {
      const result = await api.postContacts(data);
      return result;
    } catch ({ response }) {
      return console.log(thunkAPI.rejectWithValue(response.data.message));
    }
  }
);

export const fetchDeleteContacts = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      const data = await api.deleteContact(id);
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);
