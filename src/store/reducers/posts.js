import * as actions from '../actions/actionTypes';
import {updateObject} from "../utilty";

const initialState = {
    posts: [],
    loading: false
};

const showPosts = (state) => {
    return updateObject(state, {
        loading: true
    });
};

const showPostsSuccess = (state, action) => {
    return updateObject(state, {
        posts: action.posts,
        loading: false
    });
};

const showPostsFail = (state) => {
    return updateObject(state, {loading: true});
}

const addPost = (state, action) => {
    return updateObject(state, {loading: true, posts: [...state.posts, action.post]});
};

const addPostSuccess = (state) => {
    return updateObject(state, {loading: false});
};

const addPostFail = (state) => {
    return updateObject(state, {loading: true});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SHOW_POSTS: return showPosts(state, action);
        case actions.SHOW_POSTS_SUCCESS: return showPostsSuccess(state, action);
        case actions.SHOW_POSTS_FAIL: return showPostsFail(state);
        case actions.ADD_POST: return addPost(state, action);
        case actions.ADD_POST_SUCCESS: return addPostSuccess(state);
        case actions.ADD_POST_FAIL: return addPostFail(state);
        default: return state;
    }
};

export default reducer;