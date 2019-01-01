import * as Types from "../actionTypes";
import {authRef} from "../util/Firebase";

export const addPost = () => ({
    type: Types.ADD_POST
});

export const displayError = error => ({
    type: Types.DISPLAY_ERROR,
    payload: {
        error: error
    }
});

export const getPosts = (userId) => (dispatch, getState, {api}) => {
    api.getPosts(userId)
    .then(({data}) => {
        dispatch({
            type: Types.GET_POSTS__SUCCESS,
            posts: data
        });
    })
    .catch(({error}) => {
        dispatch(displayError(error));
    });
};

export const getFeed = (userId) => (dispatch, getState, {api}) => {
    api.getFeed(userId)
    .then(({data}) => {
        dispatch({
            type: Types.GET_FEED__SUCCESS,
            feed: data
        });
    })
    .catch(({error}) => {
        dispatch(displayError(error));
    });
};

export const likePost = (postId) => (dispatch, getState, {api}) => {
    const payload = {
        type: Types.LIKE_POST,
        payload: {
            postId: postId
        }
    };
    api.likePost(getState().user.id, postId)
    .catch(({error}) => {
        dispatch(displayError(error));
        dispatch(payload);
    });
    return payload;
};

export const fetchUser = () => dispatch => {
    return authRef.onAuthStateChanged(user => {
        if (user) {
            dispatch({
                type: Types.FETCH_USER,
                payload: {
                    user: user
                }
            });
        } else {
            dispatch({
                type: Types.FETCH_USER,
                payload: {
                    user: null
                }
            });
        }
    });
};

export const signUp = () => (dispatch, getState) => {
    const {email, password} = getState();
    return authRef.createUserWithEmailAndPassword(email, password)
    .catch(({error}) => {
        dispatch(displayError(error));
    });
};

export const login = () => (dispatch, getState) => {
    const {email, password} = getState();
    return authRef.signInWithEmailAndPassword(email, password)
    .catch(({error}) => {
        dispatch(displayError(error));
        dispatch({
            type: Types.LOGIN__FAILURE
        });
    });
};

export const logout = () => dispatch => {
    return authRef.signOut()
    .then(() => {
        dispatch({
            type: Types.LOGOUT__SUCCESS
        });
    })
    .catch(({error}) => {
        dispatch(displayError(error));
    });
};

export const toggleNav = () => ({
    type: Types.TOGGLE_NAV
});

export const updateEmail = email => ({
    type: Types.UPDATE_EMAIL,
    payload: {
        email: email
    }
});

export const updatePassword = password => ({
    type: Types.UPDATE_PASSWORD,
    payload: {
        password: password
    }
});
