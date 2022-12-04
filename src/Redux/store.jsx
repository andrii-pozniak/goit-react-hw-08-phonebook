import { configureStore } from "@reduxjs/toolkit";
import { phoneReducer } from "./phonesSlice";
// import { filtersReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: phoneReducer,
    // filters: filtersReducer,
  },
});
