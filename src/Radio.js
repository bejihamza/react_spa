import React, { Component } from 'react';

class Radio extends Component {
    render() {
        return (
            <div >
                 <label>sexe</label> 
      
      <input type="radio" value="Male" name="gender" checked /> Male
      <input type="radio" value="Female" name="gender" /> Female
     
            </div>
        );
    }
}

export default Radio;