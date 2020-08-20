import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button";
import Alert from '@material-ui/lab/Alert';
import Navigations from "../../components/Navigations/Navigations";
import classes from './AddPost.module.css';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';

class AddPost extends Component {

    state = {
        title: null,
        description: null,
        alert: false
    }

    addPostHandler = () => {
        if (this.state.title && this.state.description){
            this.props.onAddPost(this.state.title, this.state.description);
            this.setState({alert: true});
        }
    }

    titleHandler = (event) => {
        event.preventDefault();
        this.setState({title: event.target.value});
    }

    descriptionHandler = (event) => {
        event.preventDefault();
        this.setState({description: event.target.value});
    }

    render() {
        const {isAuthenticated} = this.props;
        let alert = <Alert severity="warning">Please enter data for the post you trying to add it!</Alert>

        if(this.state.alert){
            alert = <Alert severity="success">Your post added successfully!</Alert>
        }

        let form = (
            <div className={classes.MainDiv}>
                {alert}
                <form className={classes.FormClass}>
                    <TextField id="standard-secondary" label="Title" color="secondary" onChange={this.titleHandler}/>
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="description"
                        multiline
                        rows={4}
                        defaultValue=""
                        variant="outlined"
                        onChange={this.descriptionHandler}
                    />
                    <br/>
                    <Button onClick={this.addPostHandler} className={classes.Button} variant="contained" color="secondary">
                        Submit
                    </Button>
                </form>
            </div>
        )

        return (
            <div>
                <Navigations isAuth={isAuthenticated}/>
                {form}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.postss.posts,
        isAuthenticated: state.authentication.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: (title, description) => dispatch(actions.addPost( title, description))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);