import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from 'react-redux'

import configureStore from "./configurations/configureStore";
import "./include/bootstrap"
import "./styles/index.scss"

import App from "./components/layout"

const store = configureStore();
const app = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
            <Route path="/" component={App}/>
        </BrowserRouter>
    </Provider>, app);