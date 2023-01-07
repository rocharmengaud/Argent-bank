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

// This is a way to directly dispatch this function on an event. Example in editName component.
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

// export const fetchUserDataSuccess = (userData) => ({
//   type: 'FETCH_USER_DATA_SUCCESS',
//   payload: userData,
// });

// export const fetchUserDataError = () => ({
//   type: 'FETCH_USER_DATA_ERROR',
// });

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
