import { createSlice } from "@reduxjs/toolkit";
// import { statusFilters } from "./constants";



const filtersSlice = createSlice({
  name: "filters",
  initialState: {filters:''},
  reducers: { 
    setFilter(state, action) {
      // if(state.filters === {}){
      //   return state.filters = '';
      // }
      console.log(action.payload)
     state.filters = action.payload;
     console.log(state.filters)
     return state
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
