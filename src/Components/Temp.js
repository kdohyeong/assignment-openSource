import React from 'react';

class Temp extends React.Component {
    constructor (props){
        super(props);
    }

    render () {

        return (
            
          <div>
              <div style = {{
                    fontSize : '85%'
              }}>
              실내 온도 조절
              </div>
              <form>
                <input className="range"  id="tempChange" type="range" 
                        value={this.props.temp}
                        onChange={this.props.changeTemp}
                        step="0.5" min="0" max="100" defaultValue="15" 
                /><br/> 
              </form>
          </div>
        
        );
    }
} 

  
export default Temp;