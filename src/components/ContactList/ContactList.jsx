import React from 'react';
import { useDispatch,useSelector } from "react-redux";
import { getContacts } from "Redux/selector";
import { deletePhone, toggleCompleted } from "Redux/phonesSlice";
// import PropTypes from 'prop-types';
import { StyleItem, StyleButton, StylePage } from "./ContactList.style";

export const ContactList = () => {
   const contacts = useSelector(getContacts);
   
   console.log({contacts})
   const dispatch = useDispatch();
   const handleDelete = () => dispatch(deletePhone(contacts.id));

  const handleToggle = () => dispatch(toggleCompleted(contacts.id));
   //  console.log({contacts})
    return <ul> 
      {contacts.map(({ name, number, id}) => (
         <StyleItem key={id}>
            <StylePage >{name}: {number}</StylePage>
           
            <StyleButton type='button' onClick = {() => handleDelete(id)} >delete</StyleButton>
         </StyleItem>
      )) 
       }
    </ul>
};

// ContactList.propTypes = {
//    contacts: PropTypes.array.isRequired,
    
// }