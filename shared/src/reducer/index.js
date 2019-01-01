import {
    GET_POSTS__SUCCESS,
    LIKE_POST,
    FETCH_USER,
    LOGIN__FAILURE,
    LOGOUT__SUCCESS,
    TOGGLE_NAV,
    UPDATE_EMAIL,
    UPDATE_PASSWORD
} from "../actionTypes";

export const initialState = {
    user: null,
    loading: true,
    failedLoginAttempts: 0,
    postsById: {},
    likesByPostId: {},
    email: "",
    password: "",
    navOpen: false
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
                ...initialState,
                user: payload.user,
                loading: false
            };

        case LOGIN__FAILURE:
            return {
                ...state,
                failedLoginAttempts: state.failedLoginAttempts++
            };

        case LOGOUT__SUCCESS:
            return {
                ...initialState,
                loading: false
            };

        case TOGGLE_NAV:
            return {
                ...state,
                navOpen: !state.navOpen
            };

        case UPDATE_EMAIL:
            return {
                ...state,
                email: payload.email
            };

        case UPDATE_PASSWORD:
            return {
                ...state,
                password: payload.password
            };

        default:
            return {
                ...state
            };
    }
};

export default reducer;
