import React from 'react';
import { useDispatch,useSelector } from "react-redux";
import { getFilter, getContacts } from "Redux/selector";
import { deleteContacts } from "Redux/operations";
// import PropTypes from 'prop-types';
import { StyleItem, StyleButton, StylePage } from "./ContactList.style";

export const ContactList = () => {
   const contacts = useSelector(getContacts);
   const filterName = useSelector(getFilter)
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