import * as actions from './actionTypes';
import axios from '../../posts-axios';

export const addPost = (title, description) => {
    return dispatch => {
        dispatch(addPostStart());
        axios.post('/posts.json', {title: title, description: description})
            .then(response => {
                dispatch(addPostSuccess(response.data.name, {title: title, description: description}));
            })
            .catch(err => {
                dispatch(addPostFail(err));
            });
    };
};

export const addPostStart = () => {
    return {
        type: actions.ADD_POST_START
    }
}

export const addPostSuccess = (id, post) => {
    return {
        type: actions.ADD_POST_SUCCESS,
        post: post,
        id: id
    };
};

export const addPostFail = (error) => {
    return {
        type: actions.ADD_POST_FAIL,
        error: error
    };
};

export const showPosts = () => {
    return dispatch => {
        dispatch(showPostsStart());
        axios.get('/posts.json')
            .then(response => {
                const posts=[];
                for (let key in response.data) {
                    posts.push({
                        ...response.data[key],
                        id: key
                    });
                }
                dispatch(showPostsSuccess(posts));
            }).catch(error => {
                dispatch(showPostFail(error));
        });
    };
};

export const showPostsStart = () => {
    return {
        type: actions.SHOW_POSTS_START
    };
};

export const showPostsSuccess = (posts) => {
    return {
        type: actions.SHOW_POSTS_SUCCESS,
        posts: posts
    };
};

export const showPostFail = (error) => {
    return {
        type: actions.SHOW_POSTS_FAIL,
        error: error
    };
};