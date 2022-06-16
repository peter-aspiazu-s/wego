import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { WegoApp } from './WegoApp';
// import { Home } from './Home';
import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
const divRoot = document.querySelector('#root'); 
ReactDOM.render(
    <BrowserRouter>
        <WegoApp />
    </BrowserRouter>,
    divRoot
);