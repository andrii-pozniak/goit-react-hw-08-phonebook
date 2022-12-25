import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
// import {  theme } from "./theme";
// import {ThemeProvider} from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { store } from './Redux/contacts/store';
import { Provider } from 'react-redux';
import { ChakraProvider, theme } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    <BrowserRouter basename='/goit-react-hw-08-phonebook'>
      <ChakraProvider theme={theme}>
        <Provider store={store}>         
            <App />                 
        </Provider>       
      </ChakraProvider>
    </BrowserRouter>    
  </React.StrictMode>
);
