import React, { useState } from "react";
import {
  Paper,
  TextField,
  MenuItem,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getForcast } from "../../../api";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "skyblue",
    padding: theme.spacing(3),
    margin: theme.spacing(2),
  },
  select: {
    width: "100%",
    marginBottom: theme.spacing(3),
  },
  submitBtn: {
    alignItems: "center",
    width: "100%",
  },
  resHead: {
  
  }
}));

const WeatherSearchDis = () => {
  const weatherDegrees = [
    {
      value: "imperial",
      label: "Farenheit",
    },
    {
      value: "metric",
      label: "Celsuis",
    },
  ];
  //   console.log(handleCityUnitChange)
  const classes = useStyles();
  const [city, setCity] = useState("");
  const [unit, setUnit] = useState("imperial");
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
            <Typography variant="h4" className={classes.resHead}>Current Weather in {name} </Typography>
            <Typography variant="h6">Main: {main}</Typography>
            <Typography variant="h6">Description: {des}</Typography>
            <Typography variant="h6">Temperature: {temp}°</Typography>
            <Typography variant="h6">Feels like: {feels_like}°</Typography>
            
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
