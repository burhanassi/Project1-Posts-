import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Navigations from "../../components/Navigations/Navigations";
import classes from './Auth.module.css';
import Typography from "@material-ui/core/Typography";

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
                <div className={classes.FormCardClass}>
                    <Typography className={classes.H} variant="h3" gutterBottom>
                        Login
                    </Typography>
                    <form className={classes.FormClass}>
                        <TextField id="outlined-basic" label="E-mail Address" variant="outlined" />
                        <br/>
                        <TextField id="outlined-basic" label="Password" variant="outlined" />
                        <br/>
                        <Button variant="contained" color={"secondary"}>LogIn</Button>
                    </form>
                </div>
                </div>
        );
    }
}

export default Auth;