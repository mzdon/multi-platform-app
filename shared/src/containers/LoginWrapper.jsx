import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login, failLogin} from "../actions";

export const LoginWrapper = RenderComponent => {
    const Component = (props) => {
        return <RenderComponent {...props} />;
    };

    Component.propTypes = {
        onLogin: PropTypes.func,
        onFailLogin: PropTypes.func
    };

    return connect(() => ({}), mapDispatchToProps)(Component);
};

const mapDispatchToProps = dispatch => ({
    onLogin: user => dispatch(login(user)),
    onFailLogin: error => dispatch(failLogin(error))
});

export default LoginWrapper;
