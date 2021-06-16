import React, {useState} from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../firebase";
import { auth } from "../firebase";


import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = (event,email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
        setError("Error signing in with password and email!");
          console.error("Error signing in with password and email", error);
        });
      };
      
      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;
        
          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
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
          marginTop: theme.spacing(1),
          paddingBottom: '50px'
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
        normal: {
            marginTop: '2px',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
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
        Sign in
      </Typography>
      <div>
          {error !== null && <div className = "py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>} 
      </div>
      
      <form className={classes.form} noValidate>
        <TextField
          htmlFor="userEmail"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="userEmail"
          label="Email Address"
          name="email"
          value = {email}
          autoComplete="email"
          autoFocus
      onChange = {(event) => onChangeHandler(event)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="userPassword"
          value= {password}
          label="Password"
          type="password"
          id="userPassword"
          autoComplete="current-password"
      onChange = {(event) => onChangeHandler(event)}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
      onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}
        >
          Sign In
        </Button>
        <p
        className={classes.normal}
        >or
        </p>
    
        <Button
         fullWidth
         variant="contained"
         color="primary"
         className={classes.submit}
         onClick={() => {
           signInWithGoogle();
         }}
        > 
        Sign in with Google
      </Button>
        <Grid container>
          <Grid item xs>
            <Link to="passwordReset" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link to="signUp" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  </Container>
  );
};

export default SignIn;








