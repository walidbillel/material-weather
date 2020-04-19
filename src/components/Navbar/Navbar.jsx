import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import icon from "./icon.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "darkblue",
    flexGrow: 1,
  },
  icon: {
    height: "50px",
  },
}));

const Navbar = ({ location, currentWeather }) => {
  const classes = useStyles();
  const { city } = location;
  const date = Date.now();
  console.log(currentWeather)
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="icon">
          <img className={classes.icon} src={icon} alt="Icon" />
        </IconButton>
        <Typography variant="h6">{new Date(date).toDateString()}</Typography>
        <Typography variant="body2">{currentWeather.temp}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
