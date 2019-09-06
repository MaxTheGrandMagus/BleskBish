import React from 'react';

// import App from './App'
import Face from './components/face/face';
import Advantages from './components/advantages/advantages';
import ImageSlider from './components/slider/slider';
import MapContainer from './components/map/map';
import NavBar from './components/nav-bar/nav';
import Footer from './components/footer/footer';
import InputForm from './components/form/form';
import CustomersSlider from './components/customers/customers';

class Service extends React.Component {
  render(){
    return (
      <>
        <NavBar />
        <ImageSlider />
        <Face />
        <Advantages />
        <InputForm />
        <MapContainer />
        <CustomersSlider />
        <Footer /> 
      </>
    );
  }
}

export default Service;