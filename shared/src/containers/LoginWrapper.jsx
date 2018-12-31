import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login, updateEmail, updatePassword} from "../actions";

export const LoginWrapper = RenderComponent => {
    const Component = (props) => {
        return <RenderComponent {...props} />;
    };

    Component.propTypes = {
        email: PropTypes.string,
        password: PropTypes.string,
        onLogin: PropTypes.func,
        onUpdateEmail: PropTypes.func,
        onUpdatePassword: PropTypes.func
    };

    return connect(mapStateToProps, mapDispatchToProps)(Component);
};

const mapStateToProps = state => ({
    email: state.email,
    password: state.password
});

const mapDispatchToProps = dispatch => ({
    onLogin: () => dispatch(login()),
    onUpdateEmail: email => dispatch(updateEmail(email)),
    onUpdatePassword: password => dispatch(updatePassword(password))
});

export default LoginWrapper;
