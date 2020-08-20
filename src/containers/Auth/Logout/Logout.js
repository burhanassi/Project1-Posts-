import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import * as actions from '../../../store/actions/index';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import Navigations from "../../../components/Navigations/Navigations";

class Logout extends Component {
    buttonClickedHandler = () => {
        this.props.logout();
    }

    render() {
        let logoutPage = (<Button onClick={this.buttonClickedHandler} variant="contained">Logout</Button>);

        if(!this.props.isAuth){
            logoutPage = <Redirect to={'/auth'}/>;
        }
        return (
            <div>
                <Navigations/>
                <div style={{margin: 90}}>

                    {logoutPage}
                </div>
            </div>
        );
    }
}

const maoStateToProps = state => {
    return {
        isAuth: state.authentication.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default connect(maoStateToProps,mapDispatchToProps)(Logout);