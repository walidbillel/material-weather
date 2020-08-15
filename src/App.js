import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import WeatherSearchDis from './components/WeatherSearchDis/WeatherSearchDis.jsx';
import { fetchedLocation, getForcast } from '../api';
import './App.css';

class App extends Component {
  state = {
    currentLocation: {},
    currentWeather: {},
  };

  async componentDidMount() {
    const { country, city, timezone } = await fetchedLocation();

    this.setState({
      currentLocation: { country, city, timezone },
      currentWeather: await getForcast('imperial', city),
    });
  }

  render() {
    const { currentLocation, currentWeather } = this.state;

    return (
      <div>
        <Navbar location={currentLocation} currentWeather={currentWeather} />
        <WeatherSearchDis />
      </div>
    );
  }
}

export default App;
