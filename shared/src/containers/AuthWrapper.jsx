import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

export const AuthWrapper = RenderComponent => {
    const Component = (props) => {
        return <RenderComponent {...props} />;
    };

    Component.propTypes = {
        user: PropTypes.object
    };

    return connect(mapStateToProps)(Component);
};

const mapStateToProps = state => ({
    user: state.user
});

export default AuthWrapper;
