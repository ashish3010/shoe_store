import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import allReducers from './redux/reducer/combineReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({ reducer: allReducers })

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
