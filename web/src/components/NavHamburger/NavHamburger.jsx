import React from "react";
import {containers} from "shared-resources";

export const NavHamburger = props => {
    return (
        <i className="fa fal fa-bars" onClick={props.onToggle} />
    );
};

export default containers.NavWrapper(NavHamburger);
