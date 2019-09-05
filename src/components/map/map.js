import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

import './map.css';

class MapContainer extends Component {
    render() {
        const mapStyles = {
            width: '100%',
            height: '100%',
        };

        return(
        <Map
            className="map-component"
            google={this.props.google}
            zoom={15}
            style={mapStyles}
            initialCenter={{ lat: 42.867695, lng: 74.610897}}
        >
            <Marker position={{ lat: 42.867695, lng: 74.610897}} />
        </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAMoACBZTZUQaC2ClAp29mdzeWqhH9OEQI'
  })(MapContainer);
  