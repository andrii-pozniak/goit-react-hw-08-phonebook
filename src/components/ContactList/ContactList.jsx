import React from 'react';
import { useDispatch,useSelector } from "react-redux";
import { getContacts } from "Redux/selector";
import { deletePhone } from "Redux/phonesSlice";
// import PropTypes from 'prop-types';
import { StyleItem, StyleButton, StylePage } from "./ContactList.style";

export const ContactList = () => {
   const contacts = useSelector(getContacts);
   // console.log({contacts})
   const dispatch = useDispatch();
   // console.log(deletePhone(contacts.id))
    return <ul> 
      {contacts.map(({ name, number, id}) => (
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