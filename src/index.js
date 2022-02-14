import React, {Component} from "react";
import ReactDOM from "react-dom";
//import {createStore} from "redux";
//import {Provider} from "react-redux";
import App from "./App";
import "./index.css";

//var store = createStore(/* Something */);
var destination = document.getElementById('content');

ReactDOM.render(
    <>
        <App/>
    </>,
    destination
)