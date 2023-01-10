import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './store';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // The <Provider> component makes the store available to all of the components in the app by injecting the store into the React App.
  // The store prop is being passed to the <Provider> component.
  // This prop is the Redux store that was created by calling createStore from the redux library.
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
