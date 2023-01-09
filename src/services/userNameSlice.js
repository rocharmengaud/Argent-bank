import { createSlice } from '@reduxjs/toolkit';

export const userNameSlice = createSlice({
  name: 'userName',
  initialState: {
    firstName: '',
    lastName: '',
  },

  reducers: {
    changeFirstName: (state, action) => {
      return {
        ...state,
        firstName: action.payload,
      };
    },
    changeLastName: (state, action) => {
      return {
        ...state,
        lastName: action.payload,
      };
    },
  },
});

export const { changeFirstName, changeLastName } = userNameSlice.actions;
