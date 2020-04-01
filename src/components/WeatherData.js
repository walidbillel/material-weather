import React, {useState} from "react";
import { Paper, Typography } from '@material-ui/core'
import useStyles from "./styles";



const WeatherData = (props) => {

    const classes = useStyles();
    const [show, setShow] = useState(false);
    
    return (
        <div >
          {!show ?   <Paper className={classes.weatherRes}>
            <Typography variant='h6'>
                Temp Description: {props.main}{props.description}                   
                </Typography>
                <Typography variant='h6'>
                Temp: {props.temp}                    
                </Typography>
                <Typography variant='h6'>
                Feels Like: {props.temp}                    
                </Typography>
                
            </Paper> : setShow(!show)}
        </div>
    )
}

export default WeatherData;