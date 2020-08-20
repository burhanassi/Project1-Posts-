import * as actions from '../actions/actionTypes';
import {updateObject} from "../utilty";

const initialState = {
    posts: [],
    loading: false,
    error: null
};

const showPosts = (state) => {
    return updateObject(state, {loading: true});
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

const showPostsStart = (state) => {
    return updateObject(state, {loading: true});
}

const addPost = (state, action) => {
    return updateObject(state, {loading: true, posts: [...state.posts, action.post]});
};

const addPostSuccess = (state, action) => {
    return updateObject(state, {loading: false, error: null});
};

const addPostFail = (state, action) => {
    return updateObject(state, {loading: true, error: action.error});
};

const  addPostStart = (state) => {
    return updateObject(state, {loading: true});
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_POST_START: return addPostStart(state);
        case actions.SHOW_POSTS_START: return showPostsStart(state);
        case actions.SHOW_POSTS: return showPosts(state, action);
        case actions.SHOW_POSTS_SUCCESS: return showPostsSuccess(state, action);
        case actions.SHOW_POSTS_FAIL: return showPostsFail(state);
        case actions.ADD_POST: return addPost(state, action);
        case actions.ADD_POST_SUCCESS: return addPostSuccess(state, action);
        case actions.ADD_POST_FAIL: return addPostFail(state, action);
        default: return state;
    }
};

export default reducer;