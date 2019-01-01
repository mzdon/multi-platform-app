import "./styles.scss";
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
import {Route, Switch, withRouter} from "react-router-dom";
import Logout from "../Logout";
import Nav from "../Nav";
import ProtectedRoute from "../ProtectedRoute";
import {containers} from "shared-resources";

const getBody = loading => {
    if (loading) {
        return <AuthLoadingScreen />;
    }
    return (
        <React.Fragment>
            <Nav />
            <div className="Screen">
                <Switch>
                    <Route path="/tos" component={TermsOfServiceScreen} />
                    <Route path="/privacy" component={PrivacyScreen} />
                    <Route path="/signup" component={SignUpScreen} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/login" component={LoginScreen} />
                    <ProtectedRoute path="/newPost" component={NewPostScreen} />
                    <ProtectedRoute exact path="/" component={HomeScreen} />
                </Switch>
            </div>
        </React.Fragment>
    );
};

export class Body extends Component {
    componentDidMount() {
        this.props.onFetchUser();
    }

    render() {
        const {loading} = this.props;
        return (
            <div className="Body">
                {getBody(loading)}
            </div>
        );
    }
}

export default withRouter(containers.AuthWrapper(Body));
