import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import icon from './icon.png';
import Clock from 'react-live-clock';
import { grey } from '@material-ui/core/colors';

const shades = [500, 600, 700, 800, 900];
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: grey[shades[4]],
    flexGrow: 1,
  },
  icon: {
    height: theme.spacing(5),
  },
  clock: {
    fontFamily: '',
  },
}));

const ClockUi = ({ timezone }) => {
  return <Clock format={'HH:mm:ss'} ticking={true} timezone={timezone} />;
};

const Navbar = ({ location, currentWeather }) => {
  const classes = useStyles();
  const { timezone } = location;
  const { name, temp, main } = currentWeather;
  const date = Date.now();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="icon">
          <img className={classes.icon} src={icon} alt="Icon" />
        </IconButton>
        <Grid container justify="space-between" spacing={2}>
          <Grid item>
            <Typography variant="h6" className={classes.temp}>
              {temp} °
            </Typography>
            <Typography variant="caption" className={classes.dateCity}>
              {main} in {name}
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="h6" className={classes.clock}>
              <ClockUi timezone={timezone} />
            </Typography>
            <Typography variant="caption" className={classes.dateCity}>
              {new Date(date).toDateString()}
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
