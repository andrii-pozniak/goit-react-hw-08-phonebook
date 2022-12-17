import { configureStore } from "@reduxjs/toolkit";
import { phoneReducer } from "./phonesSlice";
import { filtersReducer } from "./filterSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
  key: 'contacts',
  storage,
  whiteList: ['contacts']
};

const persistPhoneReducer = persistReducer(persistConfig, phoneReducer);

export const store = configureStore({
  reducer: {
    contacts: persistPhoneReducer,
    filters: filtersReducer,
   
  },
  middleware (getDefaultMiddleware){ 
    return getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });
}
});

export const persistor = persistStore(store)
