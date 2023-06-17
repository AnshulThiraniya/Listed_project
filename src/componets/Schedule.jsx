import React from 'react'
import { Typography, Grid, Paper } from '@mui/material';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto:ital@1&family=Work+Sans:wght@300&display=swap');
</style>
const Schedule = () => {
    return (
        <>
        <Paper elevation={3}  style={{width:'400px',height:'200px',fontFamily: 'Montserrat',margin:'5px',borderRadius:'20px'}}>
            <Grid >
                <Grid style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Typography variant="h6" style={{margin:'10px 0 5px 10px'}}>Today`s schedule</Typography>
                    <Typography style={{margin:"10px"}} variant='subtitle1'>see all</Typography>
                </Grid>
                <Grid style={{ display: 'flex',marginLeft:'20px'}}>
                    <Grid style={{ height: '60px', width: '6px', background: 'blue'}} ></Grid>
                    <Grid style={{ display: 'flex',flexDirection:'column', paddingLeft:'10px'}}>
                        <Typography variant="Subtitle1">Metting with suppilers</Typography>
                        <Typography variant="Subtitle1">14:00-15:00</Typography>
                        <Typography variant="Subtitle1">at Sunset road , kuta bali</Typography>
                    </Grid>
                </Grid>
                <Grid style={{ display: 'flex',margin:'20px'}}>
                    <Grid style={{ height: '60px', width: '6px', background: 'blue'}} ></Grid>
                    <Grid style={{ display: 'flex',flexDirection:'column',paddingLeft:'10px'}}>
                        <Typography variant="Subtitle1">Metting with suppilers</Typography>
                        <Typography variant="Subtitle1">14:00-15:00</Typography>
                        <Typography variant="Subtitle1">at Sunset road , kuta bali</Typography>
                    </Grid>
                </Grid>
            </Grid>
            </Paper>
        </>
    )
}

export default Schedule
