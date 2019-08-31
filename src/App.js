import React, {Component} from 'react';
import './App.css';

import Advantages from './components/advantages/advantages';
import ImageSlider from './components/slider/slider';
import MapContainer from './components/map/map';
import NavBar from './components/nav-bar/nav'

class App extends Component {
  render()  {
    return (
      <>
        <NavBar />
        <ImageSlider />
        <Advantages />
        <MapContainer />
      </>
    );
  }
}

export default App;
