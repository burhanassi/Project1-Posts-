import React, {Component} from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import Posts from "./containers/Posts/Posts";
import AddPost from "./containers/AddPost/AddPost";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";
import {connect} from "react-redux";
import * as actions from './store/actions/index';



class App extends Component{
    componentDidMount() {
        this.props.tryAutoSignup();
    }

    render() {
        let routes = (
            <Switch>
                <Route path={'/posts'} component={Posts}/>
                <Route path={"/auth"} component={Auth}/>
                <Redirect to={'/posts'} from={'/'}/>
            </Switch>
        )

        if(this.props.isAuthenticated){
            routes = (
                <Switch>
                    <Route path={"/posts"} component={Posts}/>
                    <Route path={"/add-post"} component={AddPost}/>
                    <Route path={'/logout'} component={Logout}/>
                    <Route path={"/auth"} component={Auth}/>
                    <Redirect to={'/posts'} from={'/'}/>
                </Switch>
            )
        }

        return (
            <div className="App">
                {routes}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.authentication.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        tryAutoSignup: () => dispatch(actions.authCheckState())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
