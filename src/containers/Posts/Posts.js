import React, {Component} from 'react';
import Post from "../../components/Post/Post";
import Navigations from "../../components/Navigations/Navigations";
import classes from './Posts.module.css'

class Posts extends Component {
    render() {
        return (
            <div>
                <Navigations/>
                <div className={classes.MainDiv}>
                    <p className={classes.P}># read - # unread</p>
                    <div className={classes.Posts}>
                        <Post>Post one</Post>
                        <Post>Post Two</Post>
                        <Post>Post Three</Post>
                    </div>
                </div>
            </div>
        );
    }
}

export default Posts;