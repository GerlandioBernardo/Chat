import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Routes from './routes/routes.js';
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <>
       <ToastContainer/>
      <BrowserRouter>
          <Routes/>
      </BrowserRouter>
    </>
  );
}

export default App;
