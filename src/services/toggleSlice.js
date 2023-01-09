import { createSlice } from '@reduxjs/toolkit';

export const toggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    active: false,
  },

  reducers: {
    setToggle: (state) => {
      state.active = !state.active;
    },
  },
});

// This is a way to directly dispatch this function on an event. Example in editName component.
export const createToggle = () => {
  return {
    type: 'toggle/setToggle',
  };
};
