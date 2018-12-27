import "./App.css";
import React, {Component} from "react";
import {BrowserRouter} from "react-router-dom";
import {containers as Containers} from "shared-resources";
import {Body, Header, Wrapper} from "./components";

const WebApp = Containers.AppWrapper(Wrapper);

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
