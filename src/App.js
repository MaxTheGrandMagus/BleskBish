import React, {Component} from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Advantages from './components/advantages/advantages';
import ImageSlider from './components/slider/slider';
import MapContainer from './components/map/map';
import NavBar from './components/nav-bar/nav'
import GlobalRouters from './globalRouters'

class App extends Component {
  render()  {
    return (
      <>
        <NavBar />
        <ImageSlider />
        <Advantages />
        <BrowserRouter>
          <GlobalRouters/>
        </BrowserRouter>
        {/* <MapContainer /> */}
      </>
    );
  }
}

export default App;
