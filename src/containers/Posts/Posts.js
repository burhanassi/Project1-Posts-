import React, {Component} from 'react';
import Post from "../../components/Post/Post";
import Navigations from "../../components/Navigations/Navigations";

class Posts extends Component {
    render() {
        return (
            <div>
                <Navigations/>
                <Post>Post one</Post>
                <Post>Post Two</Post>
                <Post>Post Three</Post>
            </div>
        );
    }
}

export default Posts;