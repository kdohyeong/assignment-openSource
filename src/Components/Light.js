import React from 'react';
import './ControlButton.css';

class Light extends React.Component {
  
    render () {
        return (

        <div>

            <button className="ControlButton" onClick = {this.props.lightOn}>조명 켜기</button>
            <button className="ControlButton" onClick = {this.props.lightOff}>조명 끄기</button>
        
        </div>
        
        );
    }
} 

  
export default Light;