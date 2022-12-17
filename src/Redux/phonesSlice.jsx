import { createSlice } from "@reduxjs/toolkit";

const phonesInitialState = {contacts:
    [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},]}
  ;

  const phonesSlice = createSlice({
    name: 'contacts',
    
    initialState: {phonesInitialState,
      isLoading: false,
      error: null,
    },
    reducers:{
      fetchingInProgress(state) {
        state.isLoading = true;
      },
      fetchingSuccess(state, action) {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      },
      fetchingError(state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
      contacts:{
              reducer(state, action) {
                console.log(action.payload)
                if(state.contacts.some(el => el.name === action.payload.name)) {
                  return alert('Contact already exist')
               }
                console.log(action.payload)
                   state.contacts.push(action.payload)
                
                },
              
          },
            deletePhone(state, action) {
              console.log(action)
              console.log(contacts.id)
                const index = state.contacts.findIndex(contact => contact.id === action.payload);
                console.log(index)
    
                state.contacts.splice(index, 1);
                
          },
    }
    
    // reducers:{
    //   contacts:{
    //       reducer(state, action) {
    //         console.log(action.payload)
    //         if(state.contacts.some(el => el.name === action.payload.name)) {
    //           return alert('Contact already exist')
    //        }
    //         console.log(action.payload)
    //            state.contacts.push(action.payload)
            
    //         },
          
    //   },
    //     deletePhone(state, action) {
    //       console.log(action)
    //       console.log(contacts.id)
    //         const index = state.contacts.findIndex(contact => contact.id === action.payload);
    //         console.log(index)

    //         state.contacts.splice(index, 1);
            
    //   },
     
    // }
  })

  export const { fetchingInProgress, fetchingSuccess, fetchingError } = phonesSlice.actions;
  export const { contacts, deletePhone, filterName } = phonesSlice.actions
export const phoneReducer = phonesSlice.reducer;
