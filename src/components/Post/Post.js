import React, {Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

class Post extends Component {
    state = {
        checked: false
    }

    handleChange = () => {
        this.setState({checked: !this.state.checked});
        console.log(this.state.checked);
    }

    render() {
        return (
            <div>
                <Checkbox
                    checked={this.state.checked}
                    onChange={this.handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Minimum 3 rows" defaultValue={this.props.children}/>
            </div>
        );
    }
}

export default Post;