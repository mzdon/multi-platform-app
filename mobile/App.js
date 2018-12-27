import React, {Component} from "react";
import {containers as Containers} from "shared-resources";
import {Body, Header, Wrapper} from "./components";

const WebApp = Containers.AppWrapper(Wrapper);

const App = () => {
    return (
        <WebApp>
            <Header />
            <Body />
        </WebApp>
    );
};

export default App;
