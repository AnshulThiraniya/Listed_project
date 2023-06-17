import { Grid } from '@mui/material';
import Schedule from './componets/Schedule';
import GraphChart from './componets/GraphChart';
import RoundChart from './componets/RoundChart';
import Board from './componets/Board';
import MyCalculation from './componets/MyCalculation';
import NavBar from './componets/NavBar';
import Component1 from './componets/Component1';

function App() {
  return (
    <>
      <Grid container>
        <Component1 />
      </Grid>
      <Grid container spacing={1}>
        <Grid item sm={3}>
          <Grid item >
            <Board />
          </Grid>
        </Grid>
        <Grid item sm={8}>
          <Grid item>
            <NavBar />
          </Grid>
          <Grid item >
            <MyCalculation />
          </Grid>
          <Grid item style={{ margin: '20px' }}>
            <GraphChart />
          </Grid>
          <Grid item container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: '20px' }}>
            <Grid item>
              <RoundChart />
            </Grid>
            <Grid item>
              <Schedule />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
