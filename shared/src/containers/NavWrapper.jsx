import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {toggleNav} from "../actions";

export const NavWrapper = RenderComponent => {
    const NavComponent = props => {
        return <RenderComponent {...props} />
    };

    NavComponent.propTypes = {
        open: PropTypes.bool,
        onToggle: PropTypes.func
    };

    return connect(mapStateToProps, mapDispatchToProps)(NavComponent);
};

const mapStateToProps = state => ({
    open: state.navOpen
});

const mapDispatchToProps = dispatch => ({
    onToggle: () => dispatch(toggleNav())
});

export default NavWrapper;
