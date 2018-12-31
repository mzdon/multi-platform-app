import React, {Component} from "react";
import {containers} from "shared-resources";
import {Body, Wrapper} from "./components";

// redux init
const WebApp = containers.AppWrapper(Wrapper);

const App = () => {
    return (
        <WebApp>
            <Body />
        </WebApp>
    );
};

export default App;
