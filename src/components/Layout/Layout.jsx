import {Form} from "components/Form/Form";
import { Filter } from "components/Filter/Filter";
// import { useSelector, useDispatch } from "react-redux"
import { ContactList } from "components/ContactList/ContactList";
import { Outlet } from "react-router-dom";
// import { name, number } from "Redux/store";

export const Layout = () => {
    // const dispatch = useDispatch();
    // const myName = useSelector(state => state.name)
    return (
    <div>
        <Form/>
        <Filter/>
        <ContactList/>
        <Outlet/>
    </div>
    )
   
}