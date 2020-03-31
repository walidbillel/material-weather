import React, { useState, useEffect } from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  rootLocation: {
    flexGrow: 1,
    margin: theme.spacing(6)
  },
  currentWeather: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
    background: "darkorange",
    color: "white",
    textAlign: "center"
  }
}));

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
