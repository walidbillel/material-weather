import React, { useState, useEffect } from "react";
import { Paper, Typography } from "@material-ui/core";
import useStyles from './styles'


const CurrentWeather = () => {
  const classes = useStyles();

  const [currentLocation, setCurrentLocation] = useState({});
  async function fetchLocation() {
    const result = await fetch("http://ip-api.com/json");
    result
      .json()
      .then(data => {
        setCurrentLocation(data);
        console.log(data);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <div className={classes.rootLocation}>
      <Paper className={classes.currentWeather} elevation={5}>
        <Typography variant="h5">
          Current Location: {currentLocation.city}
        </Typography>
      </Paper>
    </div>
  );
};

export default CurrentWeather;
