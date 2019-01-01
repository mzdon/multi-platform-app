import "./styles.scss";
import React from "react";
import {NavLink} from "react-router-dom";
import {containers} from "shared-resources";

export const Nav = props => {
    return (
        <div className={"Nav" + (props.open ? " open" : "")}>
            <ul>
                <li>
                    <NavLink exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/newPost">New Post</NavLink>
                </li>
                <li>
                    <NavLink to="/logout">Logout</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default containers.NavWrapper(Nav);
