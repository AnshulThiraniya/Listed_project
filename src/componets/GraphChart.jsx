import React from 'react'
import { Chart } from "react-google-charts";
import { Paper } from '@mui/material';


export const data = [
  ["Week", "Guest", "User"],
  ["0", 200, 100],
  ["Week 1", 400, 450],
  ["Week 2", 200, 150],
  ["Week 3", 300, 450],
  ["Week 4", 180, 230],
  ["", 500, 250]
];

export const options = {
  title: "Activities",
  Date: "May",
  curveType: "function",
  legend: { position: "top-right" },
};

const GraphChart = () => {
  return (
    <>
    <Paper elevation={3} style={{borderRadius:'20px'}}>
      <Chart
        chartType="LineChart"
        width="100%"
        height="200px"
        data={data}
        options={options}
      />
      </Paper>
    </>

  )
}

export default GraphChart
