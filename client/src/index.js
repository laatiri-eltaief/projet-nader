import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from "./Store"
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>

  <React.StrictMode>
      <BrowserRouter>
      <App />
      </BrowserRouter>
   
  
  </React.StrictMode>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();