import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import NewPostScreen from "./NewPostScreen";
import ProtectedRoute from "./ProtectedRoute";
import React from "react";
import {Route, Redirect} from "react-router-dom";

export const Body = (props) => {
    return (
        <div className="Body">
            <Route path="/login" component={LoginScreen} />
            <ProtectedRoute path="/newPost" component={NewPostScreen} />
            <ProtectedRoute exact path="/" component={HomeScreen} />
            <Redirect
                to={{
                    pathname: "/login",
                    state: {from: props.location}
                }}
            />
        </div>
    );
};

export default Body;
