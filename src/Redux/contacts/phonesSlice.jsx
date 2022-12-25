import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact , deleteContacts} from "Redux/contacts/operations";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

  const phonesSlice = createSlice({
    name: 'contacts',
    
    initialState: {
      contacts: [],
      isLoading: false,
      error: null,
    },
    extraReducers:{
      [fetchContacts.pending]: handlePending,      
      [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
      },
      [fetchContacts.rejected]: handleRejected,
      [addContact.pending]: handlePending,
      [addContact.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        if(state.contacts.some(el => el.name === action.payload.name)) {
          return alert('Contact already exist')
       }
        state.contacts.push(action.payload);
      },
      [addContact.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
      
      [deleteContacts.pending]: handlePending,
      [deleteContacts.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1);
      },
    }
    
    
  });
  

  export const { fetchingInProgress, fetchingSuccess, fetchingError } = phonesSlice.actions;
 
export const phoneReducer = phonesSlice.reducer;
