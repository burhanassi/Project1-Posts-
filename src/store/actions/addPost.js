import * as actions from './actionTypes';

export const addPost = (title, description) => {
    return {
        type: actions.ADD_POST,
        post: {
            title: title,
            description: description
        }
    };
};

export const addPostSuccess = () => {
    return {
        type: actions.ADD_POST_SUCCESS
    };
};

export const addPostFail = (error) => {
    return {
        type: actions.ADD_POST_FAIL,
        error: error
    };
};