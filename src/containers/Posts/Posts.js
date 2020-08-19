import React, {Component} from 'react';
import Post from "../../components/Post/Post";
import Navigations from "../../components/Navigations/Navigations";
import classes from './Posts.module.css'
import {connect} from "react-redux";
import * as actions from '../../store/actions/index';

class Posts extends Component {
    state = {
        readCount: 0,
        unreadCount: 0
    }
    componentDidMount() {
        this.props.onShowPosts();
    }

    render() {
        const {posts} = this.props;
        let postsComponent = null;

        for (let key in posts) {
            postsComponent = <Post key={key}>{posts[key].description}</Post>
        }

        return (
            <div>
                <Navigations/>
                <div className={classes.MainDiv}>
                    <p className={classes.P}>{this.state.readCount} read - {this.state.unreadCount} unread</p>
                    <div className={classes.Posts}>
                        {postsComponent}
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