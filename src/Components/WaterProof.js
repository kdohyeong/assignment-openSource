import React from 'react';

class WaterProof extends React.Component {
  
    render () {
        return (
        
        <div>

          <div style = {{ 
                fontSize : '85%' 
          }}>
          습도 제어
          </div>
          <form>
          <input className="range"  id="tempChange" type="range" 
                 value={this.props.water}
                 onChange={this.props.changeWater}
                 step="2" min="0" max="100" defaultValue="0" 
         /><br/> 
         </form>
        
        </div>

            
        );
    }
} 

  
export default WaterProof;