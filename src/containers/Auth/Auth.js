import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Navigations from "../../components/Navigations/Navigations";
import classes from './Auth.module.css';
import Typography from "@material-ui/core/Typography";
import {Link} from "@material-ui/core";
import * as actions from '../../store/actions/index';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import Alert from "@material-ui/lab/Alert";

class Auth extends Component{
    state = {
        isSignUp: false,
        email: null,
        password: null,
        displayName: null
    }

    inputFieldChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    switchSignupHandler = () => {
        this.setState(prevState => ({isSignUp: !prevState.isSignUp}));
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.email, this.state.password, this.state.isSignUp, this.state.displayName)
    }

    render() {
        const displayNameInput = this.state.isSignUp ? <TextField className={classes.Input} name={"displayName"} label={"Your Name"} variant={'outlined'}/> : null;
        let errorMessage = null;
        let color = "secondary";

        if(this.props.error) {
            errorMessage = (
                <Alert severity="error" className={classes.Input}>{this.props.error.message}</Alert>
            );
        }

        if(this.state.isSignUp){
            color = "primary";
        }

        let form = (
            <div className={classes.FormCardClass}>
                <Typography className={classes.H} variant="h3" gutterBottom>
                    {!this.state.isSignUp ? 'Login' : 'Sign Up'}
                </Typography>
                <form className={classes.FormClass}>
                    {errorMessage}
                    <TextField className={classes.Input} name="email" label="E-mail Address" variant="outlined" onChange={(event) => this.inputFieldChangeHandler(event)}/>
                    <TextField className={classes.Input} name={"password"} label="Password" type={'password'} variant="outlined" onChange={(event) => this.inputFieldChangeHandler(event)}/>
                    {displayNameInput}
                    <Button variant="contained" color={color} onClick={this.submitHandler}>{this.state.isSignUp ? 'sign up' : 'LogIn'}</Button>
                </form>
                <Typography className={classes.Footer}>
                    <Link onClick={this.switchSignupHandler}>
                        {!this.state.isSignUp ? 'Don\'t have an account? Sign Up' : 'You have account? Login'}
                    </Link>
                </Typography>
            </div>
        )

        return (
            <div>
                {this.props.isAuthenticated && <Navigations/>}
                {!this.props.isAuthenticated ? form : <Redirect to={'/posts'}/>}
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        loading: state.authentication.loading,
        error: state.authentication.error,
        isAuthenticated: state.authentication.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup, displayName) => dispatch(actions.auth(email, password, isSignup, displayName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);