import React, {Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import classes from './Post.module.css';

class Post extends Component {
    state = {
        checked: false
    }

    handleChange = () => {
        this.setState(prevState => ({checked: !prevState.checked}));
    }

    render() {
        return (
            <div className={classes.Post}>
                <Checkbox
                    checked={this.state.checked}
                    onChange={this.handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <p className={classes.P}>{this.props.children}</p>
            </div>
        );
    }
}

export default Post;