import React, { Fragment } from 'react';
import './ControlButton.css';

class Setting extends React.Component {
  
    render () {
        return (
            <Fragment>
                <div className='Setcontainer'
                    style={{
                        width :"100%",
                        height : "95%",
                        backgroundColor : "#333",
                        opacity : "0.2", 
                        position : "fixed",
                        left : "0",
                        top : "4%",
                        zIndex : "10"
                    }}
                >
                </div>

                <div className="Setting" 
                    style={{  position: "fixed",
                        left : "18%",
                        top: "15%",
                        height: "76%",
                        width: "72%",
                        backgroundColor: "white",
                        opacity : "1 !important", 
                        zIndex : "15"
                    }}
                >


                    {/* <div>경보 잠금 해제</div>
                    <button className="ControlButton" onClick = {this.props.alertOff}>경보 잠금</button>
                    <button className="ControlButton" onClick = {this.props.alertOn}>경보 잠금 해제</button><br/><br/> */}
                    
                    <div><br/><br/><br/><br/>제출일자 : 2021/06/16<br/>
                        학번 : 2013040008<br/>
                        이름 : 김도형<br/>
                        전공 : 컴퓨터공학과<br/>
                        담당 교수님 : 서영훈 교수님<br/>
                    </div>

                </div>       
            </Fragment>
        );
    }
} 

  
export default Setting;