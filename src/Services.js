import React from 'react';

// import App from './App'
import Face from './components/face/face';
import Advantages from './components/advantages/advantages';
import ImageSlider from './components/slider/slider';
import MapContainer from './components/map/map';
import NavBar from './components/nav-bar/nav'
import Footer from './components/footer/footer'

class Service extends React.Component {
  render(){
    return (
      <>
        <NavBar />
        <ImageSlider />
        <Face />
        <Advantages />
        <MapContainer />
        <Footer /> 
      </>
    );
  }
}

export default Service;