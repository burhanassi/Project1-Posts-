import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button";
import Navigations from "../../components/Navigations/Navigations";

class AddPost extends Component {
    render() {
        return (
            <div>
                <Navigations/>
                <form>
                    <TextField id="standard-secondary" label="Title" color="secondary" />
                    <br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="description"
                        multiline
                        rows={4}
                        defaultValue=""
                        variant="outlined"
                    />
                    <br/>
                    <Button variant="contained" color="secondary">
                        Submit
                    </Button>
                </form>
            </div>
        );
    }
}

export default AddPost;