import React, {Component} from 'react';
import NavItem from "./NavItem/NavItem";
import classes from './Navigation.module.css';

class Navigations extends Component {
    render() {
        return (
            <div className={classes.Navigation}>
                <NavItem link={"/posts"} >Posts</NavItem>
                <NavItem link={"/add-post"} >Add Post</NavItem>
                <NavItem link={"/auth"}>Display Name</NavItem>
            </div>
        );
    }
}

export default Navigations;