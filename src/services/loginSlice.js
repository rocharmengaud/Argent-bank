import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    connected: false,
    token: '',
  },

  reducers: {
    setLogin: (state, action) => {
      state.connected = true;
      state.token = action.payload;
      // sets the Token item in local storage to the value of the payload property
      localStorage.setItem('Token', action.payload);
    },
    setLogout: (state) => {
      state.connected = false;
      state.token = '';
      localStorage.clear();
    },
    setStayLoggedIn: (state) => {
      state.connected = true;
      state.token = localStorage.getItem('Token');
    },
  },
});

export const { setLogin, setLogout, setStayLoggedIn } = loginSlice.actions;
