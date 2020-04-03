import React from "react";
import Forcast from "./components/Forcast";
import CurrentLocation from "./components/CurrentLocation";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolBar: {
    background: "darkblue",
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    letterSpacing: theme.spacing(0.4),
    fontWeight: "bold",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <Typography variant="h5" className={classes.title}>
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>
      <CurrentLocation />
      <Forcast />
    </div>
  );
}

export default App;
