import {
    HomeScreen,
    LoginScreen,
    NewPostScreen,
    PrivacyScreen,
    TermsOfServiceScreen
} from "../../screens";
import ProtectedRoute from "../ProtectedRoute";
import React from "react";
import {Route, Switch} from "react-router-dom";

export const Body = () => {
    return (
        <div className="Body">
            <Switch>
                <Route path="/tos" component={TermsOfServiceScreen} />
                <Route path="/privacy" component={PrivacyScreen} />
                <Route path="/login" component={LoginScreen} />
                <ProtectedRoute path="/newPost" component={NewPostScreen} />
                <ProtectedRoute path="/" component={HomeScreen} />
            </Switch>
        </div>
    );
};

export default Body;
