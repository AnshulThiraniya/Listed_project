import React from 'react'

import { Typography, Grid } from '@mui/material';

import myIcon from '../assests/Vector.svg';
import Icon from '../assests/Vector 1.svg';
import Icon1 from '../assests/Vector 2.svg';
import Icon2 from '../assests/Vector 3.svg';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Open+Sans:ital,wght@1,500&family=Roboto:ital@1&family=Work+Sans:wght@300&display=swap');
</style>

const styles = {
    style1:{
        width: '18%',
        height: '100px',
        borderRadius: '20px',
        padding:'10px',
        fontFamily: 'Open Sans',
        background:'#DDEFE0'
        

    },
    style2:{
        width: '18%',
        height: '100px',
        borderRadius: '20px',
        padding:'10px',
        fontFamily: 'Open Sans',
        background: '#F4ECDD'
    },
    style3:{
        width: '18%',
        height: '100px',
        borderRadius: '20px',
        padding:'10px',
        fontFamily: 'Open Sans',
        background: '#EFDADA'
    },
    style4:{
        width: '18%',
        height: '100px',
        borderRadius: '20px',
        padding:'10px',
        fontFamily: 'Open Sans',
        background:'#DEE0EF'
    }

   
}


const MyCalculation = () => {
  return (
    <>
    <Grid style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                <Grid  className='style1' style={styles.style1}>
                    <Typography style={{marginLeft:'80%'}}> 
                        <img src={Icon} alt='Revanue' />
                    </Typography>
                    <Typography>Total Revanue</Typography>
                    <Typography>$2,129,450</Typography>
                </Grid>
                <Grid  className='style2' style={styles.style2}>
                    <Typography style={{marginLeft:'80%'}}>
                        <img src={myIcon} alt='revanue' />
                    </Typography>
                    <Typography>Total Transaction</Typography>
                    <Typography>8,450</Typography>
                </Grid>
                <Grid  className='style3'  style={styles.style3}>
                    <Typography style={{marginLeft:'80%'}}>
                        <img src={Icon2} alt='revanue' />
                    </Typography>
                    <Typography>Total Likes</Typography>
                    <Typography>20,450</Typography>
                </Grid>
                <Grid  className='style4'  style={styles.style4}>
                    <Typography style={{marginLeft:'80%'}}>
                        <img src={Icon1} alt='revanue' />
                    </Typography>
                    <Typography>Total Users</Typography>
                    <Typography>9,450</Typography>
                </Grid>
            </Grid>

    </>
  )
}

export default MyCalculation
