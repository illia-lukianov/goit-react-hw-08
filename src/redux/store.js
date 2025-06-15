import { configureStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import contactsReducer from './contacts/slice';
import filtersSlice from './filters/slice';
import contactsMenuSlice from './contactsMenu/slice';
import authReducer from './auth/slice';
import galleryViewSlice from './galleryViewSelect/slice';

const persistedAuthReducer = persistReducer(
  {
    key: 'user-token',
    storage,
    whitelist: ['token'],
  },
  authReducer,
);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersSlice,
    contactsMenu: contactsMenuSlice,
    auth: persistedAuthReducer,
    galleryView: galleryViewSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
