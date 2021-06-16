import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { auth, signInWithGoogle, generateUserDocument } from "../firebase";
import SignIn from './SignIn'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {firstName});
    }
    catch(error){
      setError('Error Signing up with email and password');
    }
      
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    }
  };

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
      <div>
          {error !== null && <div className = "py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>} 
      </div>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
		value = {firstName}
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
		onChange={event => onChangeHandler(event)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
		value={lastName}
                name="lastName"
                autoComplete="lname"
		onChange={event => onChangeHandler(event)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
		type="email"
                variant="outlined"
                required
                fullWidth
		value={email}
                id="userEmail"
                label="Email Address"
                name="userEmail"
                autoComplete="email"
		onChange={event => onChangeHandler(event)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="userPassword"
		value={password}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
		onChange={event => onChangeHandler(event)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={event => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign Up
          </Button>
	  <Button
          onClick={() => {
            try {
              signInWithGoogle();
            } catch (error) {
              console.error("Error signing in with Google", error);
            }
          }}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}  
	  > 
	    Sign Up with Google
	  </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;