import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
const divRoot = document.querySelector('#root'); 
ReactDOM.render(
    <App />,
    divRoot
);