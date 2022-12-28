import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact , deleteContacts} from "Redux/contacts/operations";
import { logOut } from 'Redux/auth/operations';

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
      contacts: [{  name: 'Rosie Simpson', number: '459-12-56'},
      {  name: 'Hermione Kline', number: '443-89-12'},
      {  name: 'Eden Clements', number: '645-17-79'},
      {  name: 'Annie Copeland', number: '227-91-26'},],
      isLoading: false,
      error: null,
    },
    extraReducers:{ 
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContacts.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      console.log({action})
      console.log({state})
      state.contacts = action.payload;
      console.log(action.payload)
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      if(state.contacts.some(el => el.name === action.payload.name)) {
        return alert('Contact already exist')
      }
      state.contacts.push(action.payload);
    },
    [deleteContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(
           contact => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1);
    },
    [logOut.fulfilled](state) {
      state.contacts = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const phoneReducer = phonesSlice.reducer;
