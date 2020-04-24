import React, { useState } from 'react';
import {
  Paper,
  TextField,
  MenuItem,
  Button,
  Typography,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getForcast } from '../../../api';
import { yellow, grey, deepOrange } from '@material-ui/core/colors';

const shades = [500, 600, 700, 800, 900];
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    padding: theme.spacing(3),
    margin: theme.spacing(5),
  },
  select: {
    width: '100%',
    marginBottom: theme.spacing(3),
  },
  submitBtn: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: deepOrange[shades[1]],
  },
  resHead: {
    padding: '10px',
  },
  outputs: {
    padding: '15px',
  },
  dataFe: {
    fontFamily: 'cursive',
  },
}));

const WeatherSearchDis = () => {
  const weatherDegrees = [
    {
      value: 'imperial',
      label: 'Farenheit',
    },
    {
      value: 'metric',
      label: 'Celsuis',
    },
  ];
  //   console.log(handleCityUnitChange)
  const classes = useStyles();
  const [city, setCity] = useState('');
  const [unit, setUnit] = useState('imperial');
  const [weatherData, setWeatherData] = useState({});
  const handleCityChange = (e) => setCity(e.target.value);
  const handleUnitChange = (e) => setUnit(e.target.value);

  const fetchWeather = async (e) => {
    e.preventDefault();
    const data = await getForcast(unit, city);
    console.log(data);
    setWeatherData(data);
  };

  const SearchedCityWeather = () => {
    const { name, temp, feels_like, main, des } = weatherData;

    return (
      <div>
        {name ? (
          <Paper className={classes.root} align="center">
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h5" className={classes.resHead}>
                  Current Weather in{' '}
                  <span className={classes.dataFe}> {name}</span>{' '}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" className={classes.outputs}>
                  Main: <span className={classes.dataFe}> {main}</span>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" className={classes.outputs}>
                  Description:<span className={classes.dataFe}> {des}</span>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" className={classes.outputs}>
                  Temperature: <span className={classes.dataFe}> {temp}°</span>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" className={classes.outputs}>
                  Feels like:
                  <span className={classes.dataFe}> {feels_like}°</span>
                </Typography>
              </Grid>
            </Grid>{' '}
          </Paper>
        ) : null}
      </div>
    );
  };

  return (
    <div>
      <Paper className={classes.root}>
        <form onSubmit={fetchWeather}>
          <TextField
            className={classes.select}
            id="outlined-select-currency"
            select
            label="Unit"
            value={unit}
            onChange={handleUnitChange}
            helperText="Please select a weather unit"
            variant="outlined"
          >
            {weatherDegrees.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            className={classes.select}
            id="outlined-select-currency"
            label="City"
            value={city}
            onChange={handleCityChange}
            helperText="Please select a City"
            variant="outlined"
            required
          ></TextField>

          <Button
            //   onClick={getForcast}
            type="submit"
            className={classes.submitBtn}
            variant="contained"
            color="primary"
            size="large"
          >
            Check Weather
          </Button>
        </form>
      </Paper>
      <SearchedCityWeather />
    </div>
  );
};

export default WeatherSearchDis;
