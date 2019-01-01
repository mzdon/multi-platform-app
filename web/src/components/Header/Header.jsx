import "./styles.scss";
import {Link, withRouter} from "react-router-dom";
import NavHamburger from "../NavHamburger";
import React from "react";
import {constants, containers} from "shared-resources";

const getPageName = pathname => {
    return constants.paths[pathname] || "";
};

export const Header = ({user, location}) => {
    return (
        <header className="Header">
            {user && <span className="left">
                <NavHamburger />
            </span>}
            <h3>{getPageName(location.pathname)}</h3>
            {user && <Link className="right" to="/newPost">
                <i className="fa fal fa-plus" />
            </Link>}
        </header>
    );
};

export default withRouter(containers.AuthWrapper(Header));
