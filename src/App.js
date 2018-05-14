import React, { Component } from 'react';
import './App.css';
// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react' 
// import child component
import MapContainer from './MapContainer'
class App extends Component {
  render() {
    return (
      <div>
        <h1> Restaurant Locator </h1>
        <MapContainer google={this.props.google} />
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAsrBAOtEwFMeKfwJLR4R95gax0PLmIFs4',
})(App)