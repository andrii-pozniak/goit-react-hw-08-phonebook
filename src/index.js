import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import {  theme } from "./theme";
import {ThemeProvider} from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './Redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    <BrowserRouter basename='/goit-react-hw-07-phonebook'>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>         
        </Provider>       
      </ThemeProvider>
    </BrowserRouter>    
  </React.StrictMode>
);
