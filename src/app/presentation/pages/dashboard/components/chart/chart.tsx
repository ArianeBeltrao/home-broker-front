import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import Title from '../title/title';
import { Grid } from '@mui/material';
import ControlledSelectField from '../../../../components/controlled-inputs/controlled-select-field/controlled-select-field';
import { useStyles } from './chart-styles'

const MONTH_DATE = [
  { id: 30, label: 'Last 30 days' },
  { id: 60, label: 'Last 60 days' },
  { id: 90, label: 'Last 90 days' }
]

// Generate Sales Data
function createData(time: string, amount?: number) {
  return { time, amount };
}

const data = [
  createData('Apr 12', 0),
  createData('Apr 13', 250),
  createData('Apr 14', 250),
  createData('Apr 15', 500),
  createData('Apr 16', 750),
  createData('Apr 17', 1000),
  createData('Apr 18', 250),
];

export default function Chart() {
  const classes = useStyles()
  const theme = useTheme();

  return (
    <React.Fragment>
      <Grid item xs={6}>
      <Title>Balance History</Title>
      </Grid>
      {/* <Grid item>
        <ControlledSelectField
          className={classes.selectField}
          name='days'
          label='test'
          options={MONTH_DATE}
        />
      </Grid> */}
      
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left:0,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}