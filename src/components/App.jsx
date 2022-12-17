import  {Form}  from "components/Form/Form";
import { Layout } from "components/Layout/Layout";
import { ContactList } from "components/ContactList/ContactList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "Redux/operations";
import { getError, getIsLoading } from "Redux/selector";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Layout>
      <Form/>
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList/>
    </Layout>
  )}