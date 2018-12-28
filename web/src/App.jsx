import "./App.css";
import * as firebase from "firebase";
import React, {Component} from "react";
import {BrowserRouter} from "react-router-dom";
import {containers as Containers} from "shared-resources";
import {Body, Header, Wrapper} from "./components";

const firebaseConfig = {
    apiKey: "AIzaSyB6B8kz3_7UfZqSxtAxs83GY9N_G8SFFW0",
    authDomain: "test-project-998dd.firebaseapp.com",
    databaseURL: "https://test-project-998dd.firebaseio.com",
    projectId: "test-project-998dd",
    storageBucket: "test-project-998dd.appspot.com",
    messagingSenderId: "1094498444685"
};

firebase.initializeApp(firebaseConfig);

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
