import * as actions from './actionTypes';

export const initPosts = (posts) => {
    return {
        type: actions.INIT_POSTS,
        posts: posts
    };
};

export const showPostsSuccess = () => {
    return {
        type: actions.SHOW_POSTS_SUCCESS
    };
};

export const showPostFail = (error) => {
    return {
        type: actions.SHOW_POSTS_FAIL,
        error: error
    }
}