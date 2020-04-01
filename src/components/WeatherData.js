import React from "react";
import { Paper, Typography } from '@material-ui/core'



const WeatherData = (props) => {

    return (
        <div >
            <Paper>
            <Typography variant='h6'>
                Temp Description: {props.main}{props.description}                   
                </Typography>
                <Typography variant='h6'>
                Temp: {props.temp}                    
                </Typography>
                <Typography variant='h6'>
                Feels Like: {props.temp}                    
                </Typography>
                
            </Paper>
        </div>
    )
}

export default WeatherData;