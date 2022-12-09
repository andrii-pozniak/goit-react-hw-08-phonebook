import { createSlice } from "@reduxjs/toolkit";
// import { statusFilters } from "./constants";



const filtersSlice = createSlice({
  name: "filters",
  initialState: {filters:''},
  reducers: {
    setFilter(state, action) {
      // if(state.filter === {}){
      //   return state.filters = '';
      // }
      console.log(action.payload)
     state.filters = action.payload;
     console.log(state.filters)
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
