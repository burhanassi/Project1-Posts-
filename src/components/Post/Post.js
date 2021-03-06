import React, {Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import classes from './Post.module.css';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
        };
    }

    handleChange = () => {
        this.setState(prevState => ({checked: !prevState.checked}), this.props.onChange && this.props.onChange(this.state));
    }

    render() {
        const {children} = this.props;
        return (
            <div className={classes.Post}>
                <Checkbox
                    checked={this.state.checked}
                    onChange={this.handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <p className={classes.P}>{children}</p>
            </div>
        );
    }
}

export default Post;