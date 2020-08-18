import React, {Component} from 'react';
import Post from "../../components/Post/Post";
import Navigations from "../../components/Navigations/Navigations";
import classes from './Posts.module.css'
import {connect} from "react-redux";
import * as actions from '../../store/actions/index';

class Posts extends Component {
    state = {
        posts: this.props.posts
    };

    render() {


        let posts = this.state.posts.map(post =>
            <Post key={post.title}>{post.description}</Post>
        )
        return (
            <div>
                <Navigations/>
                <div className={classes.MainDiv}>
                    <p className={classes.P}># read - # unread</p>
                    <div className={classes.Posts}>
                        {posts}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        posts: state.add.posts,
        loading: state.posts.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onShowPosts: (posts) => dispatch(actions.initPosts(posts))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts);