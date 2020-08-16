import React, {Component} from 'react';
import classes from './NavItem.module.css';
import {NavLink} from "react-router-dom";

class NavItem extends Component {
    render() {
        return (
            <li className={classes.NavItem}>
                <NavLink exact activeClassName={classes.active} to={this.props.link} >{this.props.children}</NavLink>
            </li>
        );
    }
}

export default NavItem;