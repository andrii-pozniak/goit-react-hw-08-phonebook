import {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "Redux/contacts/selector";
import {  nanoid } from "@reduxjs/toolkit";
import { addContact } from "Redux/contacts/operations";
import { Button, Input, Text, Heading, Stack, Box, Container } from '@chakra-ui/react';

// import { StyleForm, StyleLabel, StyleButton, StyleInput} from "./Form.Styled";

export  const Form =()=> {
    const dispatch = useDispatch();
    const [name, setName] = useState();
    const [number, setNumber] = useState();
    const phoneContacts = useSelector(selectContacts);

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
            dispatch(addContact( { id: nanoid(2), name, number } ));
           reset();
          };
          const reset = () => {
            setName('')
            setNumber('')
            
            }
    return (
        <>
        
        <Box w={'90%'} py='5' >
            <Container>
            <Heading as='h1' size='l' noOfLines={1}>Phonebook</Heading>
            <Stack spacing={2}>
            <form onSubmit={handleSubmit}>
             
             <Text htmlFor=''> Name </Text>
                 <Input width="50%"
                 type="text"
                 name="name"
                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                 required
                 
                 value={name} 
                 onChange={handleChange}
                 />
             <Text htmlFor=''> Number </Text>
                 <Input width="50%"
                 name="number"
                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                 required
                 
                 value={number} 
                 onChange={handleChange}
                    />
             <Button display="flex" mt={'4'} bg='blue.100' type='submit'>Add contact</Button>
         </form>
            </Stack>
            <Heading mt={'4'} as='h2' size='l' noOfLines={1}>Contacts</Heading>        

            </Container>
            
        </Box>
         
        </>
                    
     )
    
} 