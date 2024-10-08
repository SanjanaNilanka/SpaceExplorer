import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase-config/firebaseConfig';
import { setDoc, doc } from 'firebase/firestore';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://spaceexplorer.netlify.net/">
        Space Explorer
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function SignUp() {


  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    const email = data.get('email');
    const password = data.get('password');
    

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "User", user.uid), {
          email: user.email,
          firstName: data.get('firstName'),
          lastName: data.get('lastName'),
        });
      }
      window.location.pathname = '/sign-in'
      console.log("Sign Up Success");
    } catch (err) { 
      console.log(err.message);
    }
  };

  return (
    <div>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(images/astronaut.jpeg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
          }}
        >
          <Box
            sx={(theme) => ({
              width: '100%',
              height: '100%',
              backgroundImage:
                theme.palette.mode === 'light'
                ? `linear-gradient(${alpha('#eaf0f5', 0.8)}, ${alpha('#eaf0f5', 0.2)}, ${alpha('#eaf0f5', 0.8)})`
                  : `linear-gradient(${alpha('#090e10', 0.8)}, ${alpha('#090e10', 0.2)}, ${alpha('#090e10', 0.8)})`,
              backgroundRepeat: 'no-repeat',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'center',
              p: { xs: '20px', sm: '6%',},
              position: 'absolute'
            })}
          >

          </Box>
          <Box
            sx={(theme) => ({
              width: '100%',
              height: '100%',
              backgroundImage:
                theme.palette.mode === 'light'
                ? `linear-gradient(to right,${alpha('#eaf0f5', 0.8)}, ${alpha('#eaf0f5', 0.2)}, ${alpha('#eaf0f5', 1)})`
                  : `linear-gradient(to right,${alpha('#090e10', 0.9)}, ${alpha('#090e10', 0.2)}, ${alpha('#090e10', 1)})`,
              backgroundRepeat: 'no-repeat',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'center',
              p: { xs: '20px', sm: '6%',}
            })}
          >

          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{display: 'flex'}}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src='images/favicon-192.png' width={60} alt='logo'/>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                Already have an account? &nbsp;
                <Link href="/sign-in" variant="body2" sx={{fontStyle: 'italic'}}>
                  Sign in
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
