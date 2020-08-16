import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Navigations from "../../components/Navigations/Navigations";

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//         },
//     },
// }));

class Auth extends Component{

    render() {
        return (
            <div>
                <Navigations/>
                <h3>Login</h3>
                <form>
                    <TextField id="outlined-basic" label="E-mail Address" variant="outlined" />
                    <br/>
                    <TextField id="outlined-basic" label="Password" variant="outlined" />
                    <br/>
                    <Button variant="contained" color={"secondary"}>LogIn</Button>
                </form>
            </div>
        );
    }
}

export default Auth;