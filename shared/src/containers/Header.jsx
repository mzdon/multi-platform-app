import React, {Component} from "react";
import {goHome, addPost} from "../actions";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const Header = RenderComponent => {
    const Wrapper = props => {
        return <RenderComponent {...props} />
    };

    Wrapper.propTypes = {
        page: PropTypes.string,
        onGoHome: PropTypes.func,
        onAddPost: PropTypes.func
    };

    return connect(mapStateToProps, mapDispatchToProps)(Wrapper);
};

const mapStateToProps = state => ({
    page: state.page
});

const mapDispatchToProps = dispatch => ({
    onGoHome: () => dispatch(goHome()),
    onAddPost: () => dispatch(addPost())
});

export default Header;
