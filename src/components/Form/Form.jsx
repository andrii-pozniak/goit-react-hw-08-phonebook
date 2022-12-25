import {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "Redux/contacts/selector";
import {  nanoid } from "@reduxjs/toolkit";
import { addContact } from "Redux/contacts/operations";

import { StyleForm, StyleLabel, StyleButton, StyleInput} from "./Form.Styled";

export  const Form =()=> {
    const dispatch = useDispatch();
    const [name, setName] = useState();
    const [tel, setTel] = useState();
    const phoneContacts = useSelector(selectContacts);

    const handleChange = evt => {
        const {name, value} = evt.target
        console.log(phoneContacts)
      
        switch(name) {
            case `name`:
                setName(value)  
                break;
            case `number`:
                setTel(value)  
                break;   
                default:
                return;
        }
    }

        const handleSubmit = event => {
            event.preventDefault();
           
            console.log({name, tel})
            dispatch(addContact( {name, tel, id: nanoid(3)} ));
           reset();
          };
          const reset = () => {
            setName('')
            setTel('')
            
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
                 
                 value={tel} 
                 onChange={handleChange}
                    />
             <StyleButton type='submit'>Add contact</StyleButton>
         </StyleForm>
         <h2>Contacts</h2>        
        </>
                    
     )
    
} 