import { configureStore } from '@reduxjs/toolkit';
import { userDataSlice } from './services/userDataSlice';
import { toggleSlice } from './services/toggleSlice';
import { loginSlice } from './services/loginSlice';
import { userNameSlice } from './services/userNameSlice';
import { credentialsSlice } from './services/credentialsSlice';

export const store = configureStore({
  // An object containing the reducers for the store.
  // The keys of the object correspond to the slices of the store's state, and the values are the reducers for those slices.
  reducer: {
    login: loginSlice.reducer,
    toggle: toggleSlice.reducer,
    userName: userNameSlice.reducer,
    credentials: credentialsSlice.reducer,
    userData: userDataSlice.reducer,
  },
});
