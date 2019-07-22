import React from 'react';
import ReactDOM from "react-dom";
import App from './App';
import items from "./items";

ReactDOM.render( < App items = {
            items
        }
        />, document.getElementById('root'));