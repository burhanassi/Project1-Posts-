import * as actions from '../actions/actionTypes';
import {updateObject} from "../utilty";

const initialState = {
    posts: [{title: 'title1', description: 'description 1'},
        {title: 'title2', description: 'description 2'}],
    loading: false
};

const initPost = (state, action) => {
    return updateObject(state, {
        posts: action.posts,
        loading: true
    });
};

const showPostsSuccess = (state) => {
    return updateObject(state, {loading: false});
};

const showPostsFail = (state) => {
    return updateObject(state, {loading: true});
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.INIT_POSTS: return initPost(state, action);
        case actions.SHOW_POSTS_SUCCESS: return showPostsSuccess(state);
        case actions.SHOW_POSTS_FAIL: return showPostsFail(state);
        default: return state;
    }
};

export default reducer;