import {
    applyMiddleware as applyReduxMiddleware,
    createStore as createReduxStore
} from "redux";
import {composeWithDevTools as composeWithReduxDevTools} from "redux-devtools-extension";
import reducer from "../reducer";
import reduxThunk from "redux-thunk";

/* eslint-disable */
const logger = store => next => action => {
    console.log("action:", action);
    return next(action);
};

export const setupStore = api => {
    const middlewares = [
        reduxThunk.withExtraArgument({
            api: api
        })
    ];

    if (process.env.NODE_ENV === "development") {
        middlewares.push(logger);
    }

    return createReduxStore(
        reducer,
        composeWithReduxDevTools(applyReduxMiddleware(...middlewares))
    );
};

export default setupStore;
