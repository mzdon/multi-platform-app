import {
    ADD_POST,
    GET_POSTS__SUCCESS,
    GO_HOME,
    LIKE_POST,
    LOGIN__SUCCESS
} from "../actions";

import Const from "../constants";

const {pages} = Const;

export const initialState = {
    user: null,
    page: pages.HOME,
    postsById: {},
    likesByPostId: {}
};

const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    let arr, idx;
    switch (type) {
        case ADD_POST:
            return {
                ...state,
                page: pages.NEW_POST
            };

        case GET_POSTS__SUCCESS:
            return {
                ...state,
                postsById: payload.posts.reduce((posts, post) => {
                    posts[post.id] = post;
                    return posts;
                }, {})
            };

        case GO_HOME:
            return {
                ...state,
                page: pages.HOME
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

        case LOGIN__SUCCESS:
            return {
                ...state,
                user: payload.user
            };

        default:
            return {
                ...state
            };
    }
};

export default reducer;
