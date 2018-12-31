import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {signUp, updateEmail, updatePassword} from "../actions";

export const SignUpWrapper = RenderComponent => {
    const Component = (props) => {
        return <RenderComponent {...props} />;
    };

    Component.propTypes = {
        user: PropTypes.object,
        email: PropTypes.string,
        password: PropTypes.string,
        onSignUp: PropTypes.func,
        onUpdateEmail: PropTypes.func,
        onUpdatePassword: PropTypes.func
    };

    return connect(mapStateToProps, mapDispatchToProps)(Component);
};

const mapStateToProps = state => ({
    user: state.user,
    email: state.email,
    password: state.password
});

const mapDispatchToProps = dispatch => ({
    onSignUp: () => dispatch(signUp()),
    onUpdateEmail: email => dispatch(updateEmail(email)),
    onUpdatePassword: password => dispatch(updatePassword(password))
});

export default SignUpWrapper;
