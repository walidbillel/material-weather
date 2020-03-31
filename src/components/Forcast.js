import React, { useState, useEffect } from "react";
import { Paper, Grid, TextField, MenuItem, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

console.log(process.env.REACT_APP_API_KEY);

const weatherDegrees = [
  {
    value: "imperial",
    label: "Farenheit"
  },
  {
    value: "metric",
    label: "Celsuis"
  }
];

const useStyles = makeStyles(theme => ({
 forcastPaper: {
    flexGrow: 1,
    padding: theme.spacing(5),
    margin: theme.spacing(6)
  },
  select: {
    width: "100%",
    marginBottom: theme.spacing(3)
  },
  submitBtn: {
    alignItems: "center",
    width: "100%"
  }
}));

const Forcast = () => {
  const classes = useStyles();
  const [weatherUnit, setWeatherUnit] = useState("imperial");
  const [responseObj, setResponseObj] = useState({});
 
  const [city, setCity] = useState("London");

 

  function handleCityChange(e) {
    setCity(e.target.value);
  }

  function handleUnitChange(e) {
    setWeatherUnit(e.target.value);
  }

  function getForcast(e) {
    e.preventDefault();
    console.log(weatherUnit);

    fetch(
      `https://community-open-weather-map.p.rapidapi.com/weather?units=${weatherUnit}&q=${city}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY
        }
      }
    )
      .then(response => response.json())
      .then(data => {
        if (data.cod !== 200) {
          throw new Error();
        }
        setResponseObj(data);
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (

    
    <Paper className={classes.forcastPaper}>
       
      <Grid>

        <TextField
          className={classes.select}
          id="outlined-select-currency"
          select
          label="Unit"
          value={weatherUnit}
          onChange={handleUnitChange}
          helperText="Please select Weather Unit"
          variant="outlined"
        >
          {weatherDegrees.map(option => (
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
        ></TextField>
      </Grid>
      <Grid>
        <Button
          onClick={getForcast}
          className={classes.submitBtn}
          variant="contained"
          color="primary"
          size="large"
        >
          Check Weather
        </Button>
      </Grid>
    </Paper>
  );
};

export default Forcast;
