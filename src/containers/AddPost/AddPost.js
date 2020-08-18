import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button";
import Navigations from "../../components/Navigations/Navigations";
import classes from './AddPost.module.css';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';

let title = '';
let description = '';

class AddPost extends Component {

    addPostHandler = () => {
        this.props.onAddPost(title, description);
    }

    titleHandler = (event) => {
        event.preventDefault();
        title = event.target.value;
    }

    descriptionHandler = (event) => {
        event.preventDefault();
        description = event.target.value;
    }

    render() {
        return (
            <div>
                <Navigations/>
                <form className={classes.FormClass}>
                    <TextField id="standard-secondary" label="Title" color="secondary" onChange={(event) => this.titleHandler(event)}/>
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="description"
                        multiline
                        rows={4}
                        defaultValue=""
                        variant="outlined"
                        onChange={(event) => this.descriptionHandler(event)}
                    />
                    <br/>
                    <Button onClick={this.addPostHandler} className={classes.Button} variant="contained" color="secondary">
                        Submit
                    </Button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: (title, description) => dispatch(actions.addPost( title, description))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);