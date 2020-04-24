import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import icon from './icon.png';
import Clock from 'react-live-clock';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'black',
    flexGrow: 1,
  },
  icon: {
    height: '40px',
  },
  clock: {
    marginLeft: theme.spacing(3),

    fontFamily: '',
  },

  temp: {
    marginRight: theme.spacing(2),
  },
  [theme.breakpoints.down('xs')]: {
    root: {
      backgroundColor: 'red',
    },
    dateCity: {
      fontSize: '15px',
    },
    clock: {
      fontSize: '20px',
    },
    icon: { height: '30px' },
  },
}));

const ClockUi = ({ timezone }) => {
  return <Clock format={'HH:mm:ss'} ticking={true} timezone={timezone} />;
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
        <Typography variant="subtitle2" className={classes.temp}>
          {temp} °
        </Typography>
        <Typography variant="h6" className={classes.dateCity}>
          {name} / {new Date(date).toDateString()}
        </Typography>
        <Typography variant="h6" className={classes.clock}>
          <ClockUi timezone={timezone} />
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
