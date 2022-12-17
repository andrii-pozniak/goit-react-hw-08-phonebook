import axios from "axios";
import {
    fetchingInProgress,
    fetchingSuccess,
    fetchingError,
  } from "./phonesSlice";

axios.defaults.baseURL = "https://639e135b1ec9c6657bb9399d.mockapi.io";
export const fetchContacts = () => async dispatch => {
    try {
        // Индикатор загрузки
        dispatch(fetchingInProgress());
        // HTTP-запрос
        const response = await axios.get("/contacts");
        // Обработка данных
        dispatch(fetchingSuccess(response.data));
      } catch (e) {
        // Обработка ошибки
        dispatch(fetchingError(e.message));
      } 
};