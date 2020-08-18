import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import posts from "./reducers/posts";
import {auth} from "./actions";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    posts: posts,
    authentication: auth
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;