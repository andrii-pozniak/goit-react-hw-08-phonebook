// // import {Form} from "components/Form/Form";
// // import { Filter } from "components/Filter/Filter";
// import {  Container } from '@chakra-ui/react';
// import  Home from "pages/Home";

// // import { useSelector, useDispatch } from "react-redux"
// // import { ContactList } from "components/ContactList/ContactList";
// import { Outlet } from "react-router-dom";
// import { AppBar } from "components/AppBar/AppBar";
// // import { name, number } from "Redux/store";



// export const Layout = () => {
//     // const dispatch = useDispatch();
//     // const myName = useSelector(state => state.name)
//     return (
//     <Container>
//         <AppBar/>
//         {/* <Home/> */}
//         {/* {/* <Form/>
//         <Filter/>
//         <ContactList/> */}
//         <Outlet/> 
//     </Container>
//     )
   
// }
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};