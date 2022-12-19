import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import {
//     fetchingInProgress,
//     fetchingSuccess,
//     fetchingError,
//   } from "./phonesSlice";

axios.defaults.baseURL = "https://639e135b1ec9c6657bb9399d.mockapi.io";
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const {data} = await axios.get("/contacts/contacts");
      // console.log(data)
      return {data};
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
    async (name, thunkAPI) => {
    try {
      console.log(name)
      const {data} = await axios.post("/contacts/contacts", name);
      console.log(data)
      return name;
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
      const response = await axios.delete(`/contacts/contacts/${contactId}`);
      console.log(response.data)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// () => async dispatch => {
//     try {
//         // Индикатор загрузки
//         dispatch(fetchingInProgress());
//         // HTTP-запрос
//         const response = await axios.get("/contacts");
//         // Обработка данных
//         dispatch(fetchingSuccess(response.data));
//       } catch (e) {
//         // Обработка ошибки
//         dispatch(fetchingError(e.message));
//       } 
