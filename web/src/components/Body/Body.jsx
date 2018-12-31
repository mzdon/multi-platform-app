import {
    AuthLoadingScreen,
    HomeScreen,
    LoginScreen,
    NewPostScreen,
    PrivacyScreen,
    SignUpScreen,
    TermsOfServiceScreen
} from "../../screens";
import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import {containers} from "shared-resources";

const getBody = userFetched => {
    if (userFetched) {
        return (
            <Switch>
                <Route path="/tos" component={TermsOfServiceScreen} />
                <Route path="/privacy" component={PrivacyScreen} />
                <Route path="/signup" component={SignUpScreen} />
                <Route path="/login" component={LoginScreen} />
                <ProtectedRoute path="/newPost" component={NewPostScreen} />
                <ProtectedRoute path="/" component={HomeScreen} />
            </Switch>
        );
    }

    return <AuthLoadingScreen />;
};

export class Body extends Component {
    componentDidMount() {
        const {userFetched, onFetchUser} = this.props;
        !userFetched && onFetchUser();
    }

    render() {
        const {userFetched} = this.props;
        return (
            <div className="Body">
                {getBody(userFetched)}
            </div>
        );
    }
}

export default containers.AuthWrapper(Body);
