import { configureStore } from '@reduxjs/toolkit';
import { loginSlice, editNameSlice } from './redux';

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    editName: editNameSlice.reducer,
  },
});
