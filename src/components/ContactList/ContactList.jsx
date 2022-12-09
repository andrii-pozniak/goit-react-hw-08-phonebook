import React from 'react';
import { useDispatch,useSelector } from "react-redux";
import { getFilter, getContacts } from "Redux/selector";
import { deletePhone } from "Redux/phonesSlice";
// import PropTypes from 'prop-types';
import { StyleItem, StyleButton, StylePage } from "./ContactList.style";

export const ContactList = () => {
   const contacts = useSelector(getContacts);
   const filterName = useSelector(getFilter)
   console.log({filterName})
   console.log({contacts})
   const dispatch = useDispatch();
   
   const getVisibleContact = () => {
      console.log({contacts})
   console.log({filterName})
    
      return  contacts.filter(contact => 
        contact.name.toLowerCase().includes(filterName.filters));
        
     };
     const visibleContact = getVisibleContact();
     console.log(visibleContact)
    return <ul> 
      {visibleContact.map(({ name, number, id}) => (
         <StyleItem key={id}>
            <StylePage >{name}: {number}</StylePage>
           
            <StyleButton type='button' onClick = { () => dispatch(deletePhone(id))} >delete</StyleButton>
         </StyleItem>
      )) 
       }
    </ul>
};

// ContactList.propTypes = {
//    contacts: PropTypes.array.isRequired,
    
// }