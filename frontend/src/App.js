import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Routes from './routes/routes.js';

function App() {
  return (
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
  );
}

export default App;
