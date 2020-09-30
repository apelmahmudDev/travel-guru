import React, { Component} from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class GoogleMap extends Component {
    render(props) {
        const latitude = this.props.lat;
        const longitude = this.props.lng;
        const mapStyles = {
            width: '100%',
            height: '100%',
          };
        return (
            <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: latitude, lng: longitude}}
            >
            <Marker position={{ lat: latitude, lng: longitude}} />
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBxZNxYIaIpQ6RIrsh2wC0tMhF962EUN6s'
  })(GoogleMap);