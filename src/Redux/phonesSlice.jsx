import { createSlice, nanoid } from "@reduxjs/toolkit";

const phonesInitialState = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ];

  const phonesSlice = createSlice({
    name: 'contacts',
    filter: "",
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
            const index = state.findIndex(contacts => contacts.id === action.payload);
            state.splice(index, 1);
      },
        toggleCompleted(state, action) {
            for (const contacts of state) {
              if (contacts.id === action.payload) {
                contacts.completed = !contacts.completed;
                break;
              }
            }
      },
      
    }
  })

  export const { contacts, deletePhone, toggleCompleted } = phonesSlice.actions
export const phoneReducer = phonesSlice.reducer