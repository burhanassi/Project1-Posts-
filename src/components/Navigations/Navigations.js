import React, {Component} from 'react';
import NavItem from "./NavItem/NavItem";
import classes from './Navigation.module.css';
import {connect} from "react-redux";

class Navigations extends Component {
    render() {
        return (
            <div className={classes.Navigation}>
                <NavItem link={"/posts"} >Posts</NavItem>
                <NavItem link={"/add-post"} >Add Post</NavItem>
                {this.props.isAuth ? <NavItem link={"/auth"}>Display Name</NavItem> : <NavItem link={"/logout"}>Display Name</NavItem>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.authentication.token !== null
    }
}

export default connect(mapStateToProps)(Navigations);