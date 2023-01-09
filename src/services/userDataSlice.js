import { createSlice } from '@reduxjs/toolkit';

export const userDataSlice = createSlice({
  name: 'userData',
  initialState: {},

  reducers: {
    fetchUserDataSuccess: (state, action) => action.payload,
    fetchUserDataError: (state, action) => {
      return state;
    },
  },
});

export const { fetchUserDataSuccess, fetchUserDataError } = userDataSlice.actions;
