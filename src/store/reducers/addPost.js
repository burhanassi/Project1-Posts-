import * as actions from '../actions/actionTypes';
import {updateObject} from "../utilty";

const initialState = {
    posts: [{title: 'title1', description: 'description 1'},
        {title: 'title2', description: 'description 2'}],
    loading: false
};

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
        case actions.ADD_POST: return addPost(state, action);
        case actions.SHOW_POSTS_SUCCESS: return addPostSuccess(state);
        case actions.SHOW_POSTS_FAIL: return addPostFail(state);
        default: return state;
    }
};

export default reducer;