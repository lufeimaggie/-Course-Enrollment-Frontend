import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

// JSS
// Write CSS in JS
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Course Enrollment System
          </Typography>
                    <Button color="inherit" component={Link} to="/">All Courses</Button>
                    <Button color="inherit" component={Link} to="/enrolled-courses">Enrolled Courses</Button>
                    {/*<<Link to="/">All Courses</Link>
          <Link to="/enrolled-courses">Enrolled Courses</Link>*/}
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
