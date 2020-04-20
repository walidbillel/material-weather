import React from "react";
import { AppBar, Toolbar, IconButton, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import icon from "./icon.png";
import Clock from "react-live-clock";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "darkblue",
    flexGrow: 1,
  },
  icon: {
    height: "60px",
  },
  clock: {
    marginLeft: theme.spacing(3),
    color: "orange",
    fontFamily: "",
  },
  city: {
    marginLeft: theme.spacing(3)
  }
}));

const ClockUi = ({ timezone }) => {
  return <Clock format={"HH:mm:ss"} ticking={true} timezone={timezone} />;
};

const Navbar = ({ location, currentWeather }) => {
  const classes = useStyles();
  const { city, country, timezone } = location;
  const { name, temp, feels_like, main, des } = currentWeather;
  const date = Date.now();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="icon">
          <img className={classes.icon} src={icon} alt="Icon" />
        </IconButton>
        <Typography variant="h6">{new Date(date).toDateString()}</Typography>
        <Typography variant="h6" className={classes.clock}>
        
          <ClockUi timezone={timezone} />
        </Typography>
        <Typography variant="h6" className={classes.city}> {name}</Typography>
       
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
