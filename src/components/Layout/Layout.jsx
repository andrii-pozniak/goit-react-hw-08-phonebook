import {Form} from "components/Form/Form";
import { Filter } from "components/Filter/Filter";
import styled from 'styled-components';

// import { useSelector, useDispatch } from "react-redux"
import { ContactList } from "components/ContactList/ContactList";
import { Outlet } from "react-router-dom";
// import { name, number } from "Redux/store";

export const StyleContainer  = styled.div`
width: 50%;
padding-left:${p => p.theme.space[5]}px;
padding-right:${p => p.theme.space[5]}px;
padding-bottom:${p => p.theme.space[5]}px;
`;

export const Layout = () => {
    // const dispatch = useDispatch();
    // const myName = useSelector(state => state.name)
    return (
    <StyleContainer>
        <Form/>
        <Filter/>
        <ContactList/>
        <Outlet/>
    </StyleContainer>
    )
   
}