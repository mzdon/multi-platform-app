import React, {Component} from "react";
import {Link} from "react-router-dom";
import {containers} from "shared-resources";

export class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.updateEmail = e => {
            props.onUpdateEmail(e.target.value);
        };

        this.updatePassword = e => {
            props.onUpdatePassword(e.target.value);
        };
    }

    componentDidUpdate() {
        const {history, user} = this.props;
        if (user) {
            history.push("/");
        }
    }

    render() {
        const {email, password, onLogin} = this.props;
        return (
            <div className="LoginScreen">
                <input
                    type="text"
                    onChange={this.updateEmail}
                    value={email}
                    placeholder="Email"
                />
                <input
                    type="password"
                    onChange={this.updatePassword}
                    value={password}
                    placeholder="Password"
                />
                <button onClick={onLogin}>Login</button>
                <Link to="/signup">Not signed up? Sign Up!</Link>
            </div>
        );
    }
}

export default containers.LoginWrapper(LoginScreen);
