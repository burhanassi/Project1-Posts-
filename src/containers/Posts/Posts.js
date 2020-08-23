import React, {Component} from 'react';
import Post from "../../components/Post/Post";
import Navigations from "../../components/Navigations/Navigations";
import classes from './Posts.module.css'
import {connect} from "react-redux";
import * as actions from '../../store/actions/index';
import Spinner from "../../components/UI/Spinner";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

class Posts extends Component {
    state = {
        readCount: 0
    }
    componentDidMount() {
        this.props.onShowPosts();
    }

    addRead = () => {
        this.setState({readCount: this.state.readCount + 1});
    }

    addUnread = () => {
        if(this.state.readCount !== 0){
            this.setState({readCount: this.state.readCount - 1});
        }
    }

    readUnreadHandler = value => {
        if(!value.checked){
            this.addRead();
        } else {
            this.addUnread();
        }
    }

    render() {
        const {posts, loading} = this.props;


        let postsComponent = posts.map(post => {
            return <Post onChange={this.readUnreadHandler} key={post.id} >{post.description}</Post>
        });

        let postsDiv = (
            <div className={classes.MainDiv}>
                <p className={classes.P}>{this.state.readCount} read - {posts.length-this.state.readCount} unread</p>
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
                {this.props.isAuthenticated ? <Navigations/> : <Button style={{margin: 20}} color={"primary"} variant={"outlined"}><Link to={'/auth'} style={{textDecoration: 'none'}}>Go to Login page to add some posts</Link></Button>}
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