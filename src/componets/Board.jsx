import React from 'react'
import { Typography, Grid } from '@mui/material'
import dash from '../assests/dashboard_icon.svg';
import setting from '../assests/setting_icon.svg';
import user from '../assests/user_icon.svg';
import schedule from '../assests/schedule_icon.svg';
import Tran from '../assests/transaction_icon.svg'

const Board = () => {
    return (
        <>

            <Grid style={{
                backgroundColor: 'black', width: '100%', borderRadius: '30px', display: 'flex', flexDirection: 'column',
                justifyContent: 'space-evenly', height: '650px', color: 'white', padding: '30px',marginTop:'15px'
                }}>
                <Typography variant='h3'>Boards.</Typography>
                <Grid style={{ display: 'flex' }}>
                    <img src={dash} />
                    <Typography style={{ marginLeft: '20px' }}>Dashboard</Typography>
                </Grid>
                <Grid style={{ display: 'flex' }}>
                    <img src={Tran} />
                    <Typography style={{ marginLeft: '20px' }}>transactions</Typography>
                </Grid>
                <Grid style={{ display: 'flex' }}>
                    <img src={schedule} />
                    <Typography style={{ marginLeft: '20px' }}>Schedule</Typography>
                </Grid>
                <Grid style={{ display: 'flex' }}>
                    <img src={user} />
                    <Typography style={{ marginLeft: '20px' }}>User</Typography>
                </Grid>
                <Grid style={{ display: 'flex' }}>
                    <img src={setting} />
                    <Typography style={{ marginLeft: '20px' }}>Setting</Typography>
                </Grid>
                <Grid style={{ marginBottom: '10px' }}>
                    <Typography>Help</Typography>
                    <Typography>Contect us</Typography>
                </Grid>
            </Grid>

        </>
    )
}

export default Board
