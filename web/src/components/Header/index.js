import "./styles.css";
import {Link, withRouter} from "react-router-dom";
import React from "react";

export const Header = ({location}) => {
    return (
        <header className="Header">
            <Link className="left" to="/">
                <i className="fa fal fa-home" />
            </Link>
            <h3>{location.pathname}</h3>
            <Link className="right" to="/newPost">
                <i className="fa fal fa-plus" />
            </Link>
        </header>
    );
};

export default withRouter(Header);
