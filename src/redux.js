import { configureStore, createSlice, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery, setupListeners } from '@reduxjs/toolkit/query/react';

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

export const createToggle = () => {
  return {
    type: 'toggle/setToggle',
  };
};

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
    },
    setStayLoggedIn: (state) => {
      state.connected = true;
      state.token = localStorage.getItem('Token');
    },
  },
});

export const { setLogin, setLogout, setStayLoggedIn } = loginSlice.actions;
export default loginSlice.reducer;

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

// export const userLoginApi =
//   // async (email, password) =>
//   createApi({
//     reducerPath: 'userLoginApi',
//     baseQuery: fetchBaseQuery({
//       baseUrl: 'http://localhost:3001/api/v1',
//     }),
//     endpoints: (builder) => ({
//       getLoginApi: builder.query({
//         query: (email, password) => ({
//           url: '/user/login',
//           method: 'POST',
//           body: JSON.stringify({
//             email: email,
//             password: password,
//           }),
//         }),
//       }),
//     }),
//   });

// export const { useGetLoginApiQuery } = userLoginApi;

// export const store = configureStore({
//   reducer: {
//     editName: editNameSlice.reducer,
//     [userLoginApi.reducerPath]: userLoginApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userLoginApi.middleware),
// });

// setupListeners(store.dispatch);
