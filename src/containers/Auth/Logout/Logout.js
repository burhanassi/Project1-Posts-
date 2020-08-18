import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import * as actions from '../../../store/actions/index';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import Navigations from "../../../components/Navigations/Navigations";

class Logout extends Component {
    buttonClickedHandler = () => {
        this.props.logout();
        return <Redirect to={'/auth'}/>;
    }

    render() {
        return (
            <div>
                <Navigations/>
                <Button onClick={this.buttonClickedHandler} variant="contained">Logout</Button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default connect(null,mapDispatchToProps)(Logout);