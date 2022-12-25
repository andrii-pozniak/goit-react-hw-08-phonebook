import React from 'react';
import { useDispatch,useSelector } from "react-redux";
import { selectFilter, selectContacts } from "Redux/contacts/selector";
import { deleteContacts } from "Redux/contacts/operations";
// import PropTypes from 'prop-types';
import { StyleItem, StyleButton, StylePage } from "./ContactList.style";

export const ContactList = () => {
   const contacts = useSelector(selectContacts);
   const filterName = useSelector(selectFilter)
console.log(contacts)
  
   const dispatch = useDispatch();
   
   const getVisibleContact = () => {
    
      return  contacts.filter(contact => 
        contact.name.toLowerCase().includes(filterName.filters));
        
     };
     const visibleContact = getVisibleContact();
     console.log(visibleContact)
    return <ul> 
      {visibleContact.map(({ name, tel, id}) => (
         <StyleItem key={id}>
            <StylePage >{name}: {tel}</StylePage>
           
            <StyleButton type='button' onClick = { () => dispatch(deleteContacts(id))}>delete</StyleButton>
         </StyleItem>
      )) 
       }
    </ul>
};

// ContactList.propTypes = {
//    contacts: PropTypes.array.isRequired,
    
// }