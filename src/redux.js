import { configureStore, createSlice } from '@reduxjs/toolkit';

const editNameSlice = createSlice({
  name: 'editName',

  initialState: {
    active: false,
  },

  reducers: {
    useToggle: (state) => {
      state.active = !state.active;
    },
  },
});

export const store = configureStore({
  reducer: {
    editName: editNameSlice.reducer,
  },
});
