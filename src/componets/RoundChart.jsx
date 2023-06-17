import { Paper } from '@mui/material';
import React from 'react'
import { Chart } from "react-google-charts";

export const data = [
    ["Task", "Top Product Data"],
    ["Basic Tees", 48],
    ["Custom  pants", 25],
    ["Super Hoddies", 12],
  ];
  
  export const options = {
    title: "Top Product Data",
  };
const RoundChart = () => {
  return (
    <Paper elevation={3} style={{borderRadius:'20px'}}>
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"400px"}
      height={"200px"}
    />
    </Paper>
  )
}

export default RoundChart
