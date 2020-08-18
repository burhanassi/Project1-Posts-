import React, {Component} from 'react';
import Post from "../../components/Post/Post";
import Navigations from "../../components/Navigations/Navigations";
import classes from './Posts.module.css'
import {connect} from "react-redux";
import * as actions from '../../store/actions/index';

class Posts extends Component {
    componentDidMount() {
        this.props.onShowPosts();
    }

    render() {
        let posts = this.props.posts.map(post =>
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
        posts: state.posts.posts,
        loading: state.posts.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onShowPosts: () => dispatch(actions.showPosts())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts);