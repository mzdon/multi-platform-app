import {
    GET_POSTS__SUCCESS,
    LIKE_POST,
    FETCH_USER,
    LOGIN__FAILURE
} from "../actionTypes";

export const initialState = {
    user: null,
    userFetched: false,
    failedLoginAttempts: 0,
    postsById: {},
    likesByPostId: {},
    email: "",
    password: ""
};

const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    let arr, idx;
    switch (type) {
        case GET_POSTS__SUCCESS:
            return {
                ...state,
                postsById: payload.posts.reduce((posts, post) => {
                    posts[post.id] = post;
                    return posts;
                }, {})
            };

        case LIKE_POST:
            arr = likesByPostId[payload.postId] || [];
            idx = arr.indexOf(state.user.id);
            if (idx > -1) {
                return {
                    ...state,
                    likesByPostId: {
                        ...likesByPostId,
                        [payload.postId]: [
                            ...arr.slice(0, idx),
                            ...arr.slice(idx + 1)
                        ]
                    }
                };
            } else {
                return {
                    ...state,
                    likesByPostId: {
                        ...likesByPostId,
                        [payload.postId]: arr.concat(state.user.id)
                    },
                };
            }

        case FETCH_USER:
            return {
                ...state,
                user: payload.user,
                userFetched: true,
                failedLoginAttempts: 0,
                email: "",
                password: ""
            };

        case LOGIN__FAILURE:
            return {
                ...state,
                failedLoginAttempts: state.failedLoginAttempts++
            };

        default:
            return {
                ...state
            };
    }
};

export default reducer;
