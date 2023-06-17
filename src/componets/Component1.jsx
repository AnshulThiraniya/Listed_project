import React from 'react'
import SignUpBoard from './SignUpBoard'
import LoginPage from './LoginPage'
import { Grid } from '@mui/material'

const Component1 = () => {
    return (
        <>
            <Grid container spacing={1} style={{display:'flex',flexDirection:'row'}}>
                <Grid item sm={4}>
                    <SignUpBoard />
                </Grid>
                <Grid item  sm={6} style={{}}>
                    <LoginPage />
                </Grid>
            </Grid>
        </>
    )
}

export default Component1
