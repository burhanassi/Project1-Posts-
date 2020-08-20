import React, {Component} from 'react';
import Post from "../../components/Post/Post";
import Navigations from "../../components/Navigations/Navigations";
import classes from './Posts.module.css'
import {connect} from "react-redux";
import * as actions from '../../store/actions/index';
import Spinner from "../../components/UI/Spinner";
import Button from "@material-ui/core/Button";

class Posts extends Component {
    state = {
        readCount: 0,
        unreadCount: this.props.posts.length
    }
    componentDidMount() {
        this.props.onShowPosts();
    }

    addRead = () => {
        this.setState({readCount: this.state.readCount + 1});
        if(this.state.unreadCount !== 0){
            this.setState({unreadCount: this.state.unreadCount - 1});
        }
    }

    addUnread = () => {
        this.setState({unreadCount: this.state.unreadCount + 1});
        if(this.state.readCount !== 0){
            this.setState({readCount: this.state.readCount - 1});
        }
    }

    handler = value => {
        if(!value.checked){
            this.addRead();
        } else {
            this.addUnread();
        }
    }

    render() {
        const {posts, loading} = this.props;

        let postsComponent = posts.map(post => {
            return <Post onChange={this.handler} key={post.id} >{post.description}</Post>
        });

        let postsDiv = (
            <div className={classes.MainDiv}>
                <p className={classes.P}>{this.state.readCount} read - {this.state.unreadCount} unread</p>
                <div className={classes.Posts}>
                    {postsComponent}
                </div>
            </div>
        )

        if(loading){
            postsDiv = <Spinner/>
        }

        return (
            <div>
                {this.props.isAuthenticated ? <Navigations/> : <Button href={"/auth"} style={{margin: 20}} color={"default"} variant={"outlined"}>Go to Login page to add some posts</Button>}
                {postsDiv}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        posts: state.postss.posts,
        loading: state.postss.loading,
        isAuthenticated: state.authentication.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onShowPosts: () => dispatch(actions.showPosts())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts);