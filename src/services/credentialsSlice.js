import { createSlice } from '@reduxjs/toolkit';

export const credentialsSlice = createSlice({
  name: 'credentials',
  initialState: {
    email: '',
    password: '',
  },

  reducers: {
    setEmail: (state, action) => {
      return {
        ...state,
        email: action.payload,
      };
    },
    setPassword: (state, action) => {
      return {
        ...state,
        password: action.payload,
      };
    },
  },
});

export const { setEmail, setPassword } = credentialsSlice.actions;
