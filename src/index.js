import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import './styles/sass/style.scss';
import './styles/css/style.css';
import './styles/css/bootstrap.min.css';
import './styles/css/font-awesome.min.css';
import './styles/css/elegant-icons.css';
import './styles/css/owl.carousel.min.css';
import './styles/css/magnific-popup.css';
import './styles/css/slicknav.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
    <ToastContainer autoClose={3000} />
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
