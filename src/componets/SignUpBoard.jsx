import React from 'react'
import { Typography, Grid } from '@mui/material'

const SignUpBoard = () => {
    return (
        <>
            <Grid style={{
                backgroundColor: 'black', width: '400px', display: 'flex', flexDirection: 'column',
                justifyContent: 'space-evenly', height: '550px', color: 'white', padding: '30px', marginTop: '15px'
            }}>
                <Typography variant='h3' style={{margin:'auto'}}>Boards..</Typography>

            </Grid>
        </>
    )
}

export default SignUpBoard
