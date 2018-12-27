import HomeScreen from "./HomeScreen";
import NewPostScreen from "./NewPostScreen";
import React from "react";
import {Route} from "react-router-dom";

export const Body = () => {
    return (
        <div className="Body">
            <Route exact path="/" component={HomeScreen} />
            <Route path="/newPost" component={NewPostScreen} />
        </div>
    );
};

export default Body;
