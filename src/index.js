import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './Store';
import App from './App';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";




ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));


