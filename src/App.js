import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import WeatherSearchDis from "./components/WeatherSearchDis/WeatherSearchDis.jsx";
import { fetchedLocation, getForcast } from "../api";

class App extends Component {
  state = {
    currentLocation: {},
    currentWeather: {},
  };

  // function to fetch weather
  // if no argument pass the current location
  // else use arguments passed in WeatherSerach



  

  async componentDidMount() {
    const { country, city } = await fetchedLocation();
  
    this.setState({
      currentLocation: { country, city },
      currentWeather: await getForcast(
        "imperial",
        city
      ) 
    });
    console.log(this.state)
  }

  render() {
    const { currentLocation, currentWeather } = this.state;

    return (
      <div>
        <Navbar location={currentLocation} currentWeather={currentWeather} />
        <WeatherSearchDis
          location={currentLocation}
          
        />
      </div>
    );
  }
}

export default App;
