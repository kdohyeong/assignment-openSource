import React from 'react';
import './ControlButton.css';

class Vfan extends React.Component {
  
    render () {
        return (

            <div>

            <button className="ControlButton" onClick = {this.props.vfanOn}>선풍기 작동</button>
            <button className="ControlButton" onClick = {this.props.vfanOff}>선풍기 정지</button>
        
            </div>
        );
    }
} 

  
export default Vfan;