import { TextField, Button, Paper, Typography, Link, Grid } from '@mui/material'
import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

const LoginPage = () => {
    return (
        <>
          <Grid>
            <Grid style={{ display: 'flex', flexDirection: 'column',justifyContent:'space-between', width: '400px', height: '170px', margin: 'auto', padding: '20px' }}>
                <Typography variant="h3">Sign In </Typography>
                <Typography variant="subtitle2">Sign in to your account</Typography>
                <GoogleOAuthProvider clientId="your_client_id">
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                </GoogleOAuthProvider>
            </Grid>
            <Paper elevation={3} style={{
                display: 'flex', flexDirection: 'column', width: '400px', justifyContent: 'space-around',
                height: '300px', margin: 'auto', padding: '20px'
            }}>

                <Typography>Email Address</Typography>
                <TextField
                    id="outlined-password-input"

                    type="email"
                    autoComplete="current-email"
                />
                <Typography>Password</Typography>
                <TextField
                    id="outlined-password-input"

                    type="password"
                    autoComplete="current-password"
                />
                <Typography component={Link} to={''} style={{ textDecoration: 'none' }}>Forget Password ?</Typography>
                <Button variant="contained">Sign In</Button>
                <Typography>Don`t have any account ? Register here</Typography>
            </Paper>

            </Grid>
        </>
    )
}

export default LoginPage
