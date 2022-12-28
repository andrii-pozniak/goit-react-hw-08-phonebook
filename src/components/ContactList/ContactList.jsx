import React from 'react';
import { useDispatch,useSelector } from "react-redux";
import { selectFilter, selectContacts } from "Redux/contacts/selector";
import { deleteContacts } from "Redux/contacts/operations";
import { Button, List, Stack, Box, Text, Grid, GridItem, Container } from '@chakra-ui/react';

// import PropTypes from 'prop-types';
// import { StyleItem, StyleButton, StylePage } from "./ContactList.style";

export const ContactList = () => {
   const contacts = useSelector(selectContacts);
   const filterName = useSelector(selectFilter)
   console.log(contacts)
  
   const dispatch = useDispatch();
   
   const getVisibleContact = () => {
      console.log(filterName)
      return  contacts.filter(contact => 
        contact.name.toLowerCase().includes(filterName.filters));
        
     };
     const visibleContact = getVisibleContact();
     console.log(visibleContact)
    return <ul> 
      {visibleContact.map(({ name, number, id}) => (
         <Box w={'90%'} py='4'>
            <Container>
            <Stack spacing={1}>               
               <List key={id}>
                  <Grid w={'80%'} templateColumns='repeat(4, 0.3fr)' gap={1} alignItems={"center"} >
                     <GridItem colSpan={2}  borderRadius="md" bg={'blue.100'} p={'2'} justifyContent={'center'}>
                        <Text >{name}</Text>
                     </GridItem >
                     <GridItem colSpan={1}  borderRadius="md" bg={'blue.100'}p={'2'} justifyContent={'center'}>
                        <Text > {number}</Text>
                     </GridItem>                  
                     <GridItem colSpan={1} >
                        <Button bg='blue.200' _hover={{shadow: 'md'}} type='button' onClick = { 
                        () => dispatch(deleteContacts(id))}>delete</Button>

                     </GridItem>
                  </Grid>                
               </List>           
            </Stack>
            </Container>
            
         </Box>
         
      )) 
       }
    </ul>
};

// ContactList.propTypes = {
//    contacts: PropTypes.array.isRequired,
    
// }