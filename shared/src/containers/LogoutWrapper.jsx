import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logout} from "../actions";

export const LogoutWrapper = RenderComponent => {
    const Component = (props) => {
        return <RenderComponent {...props} />;
    };

    Component.propTypes = {
        user: PropTypes.object,
        onLogout: PropTypes.func
    };

    return connect(mapStateToProps, mapDispatchToProps)(Component);
};

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    onLogout: () => dispatch(logout())
});

export default LogoutWrapper;
