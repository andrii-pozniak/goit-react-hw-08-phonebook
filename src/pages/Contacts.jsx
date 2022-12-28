import { ContactList } from 'components/ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'Redux/contacts/operations';
import { selectLoading } from 'Redux/contacts/selector';
import { Form  } from "components/Form/Form";
import { Filter } from 'components/Filter/Filter';

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
  
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  
    return (
      <>
       
          <title>Your tasks</title>
        <Form/>  
        <Filter/>     
        <div>{isLoading && 'Request in progress...'}</div>
        <ContactList/>
        
      </>
    );
  }
  