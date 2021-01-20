import React, { Component } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';

class Contact extends Component {
    
 render() {
 return (
 <div>
 <h2>GOT QUESTIONS?</h2>
 <p>The easiest thing to do is post on
 our <a href="http://forum.kirupa.com">forums</a>.
 </p>
  
          <div className="footer">
    <p><Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 36.89660672423709, lng:  10.19177640052801}}
         /></p>
  </div>
  
 </div>
 
 
 );
 }
 
}
const mapStyles = {
    width: '100%',
    height: '100%',
  };
 
 export default GoogleApiWrapper({
    apiKey: 'AIzaSyAH5G54hRC-qGlFN3gv3x_mcxwb-KjZEMY'
  })(Contact);