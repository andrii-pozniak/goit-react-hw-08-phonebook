import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
   
    try {
      const res = await axios.get('/contacts');
      console.log(res.data)
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
    async (name, thunkAPI) => {
      console.log(name)
    try {
      const response = await axios.post('/contacts',  name );
      console.log(response.data)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteContacts = createAsyncThunk(
  "contacts/deleteContacts",
  async (contactId, thunkAPI) => {
    console.log(contactId)
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      console.log(response.data)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
