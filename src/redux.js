import { configureStore, createSlice } from '@reduxjs/toolkit';

const editNameSlice = createSlice({
  name: 'editName',
  initialState: {
    active: false,
  },

  reducers: {
    setToggle: (state) => {
      state.active = !state.active;
    },
  },
});

export const store = configureStore({
  reducer: {
    editName: editNameSlice.reducer,
  },
});

export const createToggle = () => {
  return {
    type: 'editName/setToggle',
  };
};
