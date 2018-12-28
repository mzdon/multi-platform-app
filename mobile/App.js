import React, {Component} from "react";
import {containers as Containers} from "shared-resources";
import {Body, Wrapper} from "./components";


// redux init
const WebApp = Containers.AppWrapper(Wrapper);

const App = () => {
    return (
        <WebApp>
            <Body />
        </WebApp>
    );
};

export default App;
