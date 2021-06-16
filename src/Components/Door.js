import React from 'react';
import './ControlButton.css';

class Door extends React.Component {
  
    render () {
        return (

          <div>

              <button className="ControlButton" onClick = {this.props.doorOpen}>현관문 열기</button>
              <button className="ControlButton" onClick = {this.props.doorClose}>현관문 닫기</button>
          
          </div>
        
        );
    }
} 

  
export default Door;