import {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "Redux/selector";
import {  nanoid } from "@reduxjs/toolkit";
import { addContact } from "Redux/operations";

import { StyleForm, StyleLabel, StyleButton, StyleInput} from "./Form.Styled";

export  const Form =()=> {
    const dispatch = useDispatch();
    const [name, setName] = useState();
    const [number, setNumber] = useState();
    const phoneContacts = useSelector(getContacts);

    const handleChange = evt => {
        const {name, value} = evt.target
        console.log(phoneContacts)
      
        switch(name) {
            case `name`:
                setName(value)  
                break;
            case `number`:
                setNumber(value)  
                break;   
                default:
                return;
        }
    }

        const handleSubmit = event => {
            event.preventDefault();
           
            console.log({name, number})
            dispatch(addContact( {name, number, id: nanoid(3)} ));
           reset();
          };
          const reset = () => {
            setName('')
            setNumber('')
            
            }
    return (
        <>
        <h1>Phonebook</h1>
         <StyleForm onSubmit={handleSubmit}>
             
             <StyleLabel htmlFor=''> Name </StyleLabel>
                 <StyleInput
                 type="text"
                 name="name"
                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                 required
                 
                 value={name} 
                 onChange={handleChange}
                 />
             <StyleLabel htmlFor=''> Number </StyleLabel>
                 <StyleInput
                 type="tel"
                 name="number"
                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                 required
                 
                 value={number} 
                 onChange={handleChange}
                    />
             <StyleButton type='submit'>Add contact</StyleButton>
         </StyleForm>
         <h2>Contacts</h2>        
        </>
                    
     )
    
} 