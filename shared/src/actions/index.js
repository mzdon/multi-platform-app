export const ADD_POST = "ADD_POST";
export const addPost = () => ({
    type: ADD_POST
});

export const DISPLAY_ERROR = "DISPLAY_ERROR";
export const displayError = error => ({
    type: DISPLAY_ERROR,
    error: error
});

export const GET_POSTS__SUCCESS = "GET_POSTS__SUCCESS";
export const getPosts = (userId) => (dispatch, getState, {api}) => {
    api.getPosts(userId)
    .then(({data}) => {
        dispatch({
            type: GET_POSTS__SUCCESS,
            posts: data
        })
    })
    .catch(({error}) => {
        dispatch(displayError(error));
    });
};

export const GET_FEED__SUCCESS = "GET_FEED__SUCCESS";
export const getFeed = (userId) => (dispatch, getState, {api}) => {
    api.getFeed(userId)
    .then(({data}) => {
        dispatch({
            type: GET_FEED__SUCCESS,
            feed: data
        })
    })
    .catch(({error}) => {
        dispatch(displayError(error));
    });
};

export const GO_HOME = "GO_HOME";
export const goHome = () => ({
    type: GO_HOME
});

export const LIKE_POST = "LIKE_POST";
export const likePost = (postId) => (dispatch, getState, {api}) => {
    const payload = {
        type: LIKE_POST,
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

export const LOGIN__SUCCESS = "LOGIN__SUCCESS";
// export const login = (userName, password) => (dispatch, getState, {api}) => {
//     api.login(userName, password)
//     .then(({data}) => {
//         dispatch({
//             type: LOGIN__SUCCESS,
//             user: data
//         });
//     })
//     .catch(({error}) => {
//         dispatch(displayError(error));
//     });
// };
export const login = user => ({
    type: LOGIN__SUCCESS,
    payload: {
        user: user
    }
});

export const LOGIN__FAILURE = "LOGIN__FAILURE";
export const failLogin = () => ({
    type: LOGIN__FAILURE
});
