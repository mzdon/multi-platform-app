import "./App.css";
import React, {Component} from "react";
import {BrowserRouter} from "react-router-dom";
import {containers} from "shared-resources";
import {Body, Header, Wrapper} from "./components";

const WebApp = containers.AppWrapper(Wrapper);

const App = () => {
    return (
        <BrowserRouter>
            <WebApp>
                <Header />
                <Body />
            </WebApp>
        </BrowserRouter>
    );
};

export default App;
