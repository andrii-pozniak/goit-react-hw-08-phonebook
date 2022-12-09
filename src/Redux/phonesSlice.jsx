import { createSlice, nanoid } from "@reduxjs/toolkit";

const phonesInitialState = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ];

  const phonesSlice = createSlice({
    name: 'contacts',
    // filter: '',
    initialState: phonesInitialState,
    reducers:{
      contacts:{
          reducer(state, action) {
               state.push(action.payload)
            
            },
            
          prepare({name, number}) {
            console.log({name, number})
                    return {
                      payload: {            
                        id: nanoid(3),
                        name:name,
                        number: number,
                    },
                    };
            },
      },
        deletePhone(state, action) {
          console.log(contacts.id)
            const index = state.findIndex(contact => contact.id === action.payload);
            console.log(index)

            state.splice(index, 1);
            
      },
      // filterName(state, action) {
      //   console.log(action.payload)
      //   // if(state.filterPhone === ''){
      //   //   return
      //   //  }
      //    state.filter = action.payload
      //   console.log(state.filter)
      //   console.log(action.payload)
      //   const normalizedFilter = state.filter.toLowerCase(); 
      
      // return  state.filter.filter(({filter}) => 
      // filter.toLowerCase().includes(normalizedFilter));
      // },
      
    }
  })

  export const { contacts, deletePhone, filterName } = phonesSlice.actions
export const phoneReducer = phonesSlice.reducer;
// export const filtersReducer = phonesSlice.reducer;