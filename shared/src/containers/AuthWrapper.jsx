import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchUser} from "../actions";

export const AuthWrapper = RenderComponent => {
    const Component = (props) => {
        return <RenderComponent {...props} />;
    };

    Component.propTypes = {
        user: PropTypes.object,
        loading: PropTypes.bool,
        onFetchUser: PropTypes.func
    };

    return connect(mapStateToProps, mapDispatchToProps)(Component);
};

const mapStateToProps = state => ({
    user: state.user,
    loading: state.loading
});

const mapDispatchToProps = dispatch => ({
    onFetchUser: () => dispatch(fetchUser())
});

export default AuthWrapper;
