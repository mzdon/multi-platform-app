import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {containers} from "shared-resources";

export class Logout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedOut: false,
            error: null
        };
    }

    componentDidMount() {
        this.props.onLogout()
        .then(() => {
            this.setState({
                loggedOut: true
            })
        })
        .catch(({error}) => {
            this.setState({
                error: error
            });
        });
    }

    render() {
        const {loggedOut, error} = this.state;

        if (loggedOut) {
            // redirect to root directory and let the normal
            // unauthenticated pattern take over
            return <Redirect to="/" />;
        }

        return (
            <div className="Logout">
                <p>{error ? error : "Logging out..."}</p>
            </div>
        );
    }
}

export default containers.LogoutWrapper(Logout);
