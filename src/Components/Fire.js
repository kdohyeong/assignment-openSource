import React from 'react';
import './ControlButton.css';

class Fire extends React.Component {
  
    render () {
        return (

          <button className="ControlButton" onClick = {(e) => {this.props.fireOff(); }}>진화기 작동</button> 
        
        );
    }
} 

  
export default Fire;