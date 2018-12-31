import {Redirect, Route} from "react-router-dom";
import React from "react";
import {containers} from "shared-resources";

export const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props =>
                rest.user ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/signup",
                            state: {from: props.location}
                        }}
                    />
                )
            }
        />
    );
};

export default containers.AuthWrapper(ProtectedRoute);
