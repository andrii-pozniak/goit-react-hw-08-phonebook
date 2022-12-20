import { configureStore } from "@reduxjs/toolkit";
import { phoneReducer } from "./phonesSlice";
import { filtersReducer } from "./filterSlice";

export const store = configureStore({
  reducer: {
    contacts: phoneReducer,
    filters: filtersReducer,
  },
});

