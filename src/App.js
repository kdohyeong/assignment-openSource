import React, {Component, Fragment} from 'react';
import Home from './Components/Home.js';
import Fire from './Components/Fire.js';
import Door from './Components/Door.js';
import Light from './Components/Light.js';
import Temp from './Components/Temp.js';
import WaterProof from './Components/WaterProof.js';
import Vfan from './Components/Vfan.js';
import Setting from './Components/Setting.js';
import Button from '@material-ui/core/Button';
import './App.css';

class App extends Component {
  constructor (props){
    super(props);

    //사용할 state 목록 정의
    this.state = {
      mode : 'Door',

      door : 'CLOSE',   // OPEN / CLOSE / OPEN
      light : 'OFF',    // ON / OFF
      vfan : 'OFF',     // ON / OFF
      temp : 15,        // 0 ~ 100 ('C) /
      fire : '화재X',   // 화재X / 화재 발생!! + 경보   
      waterproof : 0,   // 0 ~ 100 (%) / 50UP 경경보 / 80UP 중경보
      alertting : 'ON', // 경보 ON / OFF
      tempRange : 50   // 기본 50

    };
  }

  componentDidMount() {
    
    //화재 경보
    setInterval(() => {
      if (this.state.fire === '화재 발생!!' && this.state.alertting === 'ON') {
        alert('화재가 발생했습니다!!');
      }
    }, 5000);
    //실내 온도
    setInterval(() => {
      console.log(this.state.tempRange);
      console.log(this.state.temp);
      if (this.state.temp >= this.state.tempRange && this.state.alertting === 'ON') {
        alert('실내 온도가 너무 높습니다!! 보일러 강제 종료');
      }
    }, 5000);
    //습도 50% 경보
    setInterval(() => {
      if (this.state.waterproof >= 50 && this.state.waterproof <= 80 && this.state.alertting === 'ON') {
        alert('실내 습도가 50%를 넘었습니다!!');
      }
    }, 5000);
    //습도 80% 이상 경보
    setInterval(() => {
      if (this.state.waterproof >= 80 && this.state.alertting === 'ON') {
        alert('실내 습도가 80%를 넘었습니다!!');
      } 
    }, 3000); 

  }

  componentWillUnmount() {
    // 경보 해제
    clearInterval(this);
  }

  render() {
    return (
      <Fragment>
        <div className="Container">
          <label className="title">MY HOME CONTROLER</label>
          <br/><br/>
          {/* 홈 화면 */}
          <div className="View">
            <Home 
                    door = {this.state.door} 
                    light = {this.state.light}
                    vfan = {this.state.vfan}
                    temp = {this.state.temp}
                    waterproof = {this.state.waterproof}
                    fire = {this.state.fire}
            /><br/>
          </div>
          {/* 제어판 */}
          <div className="Control">CONTROL PANEL<br/>
          { this.handleChangeView() }<br/>
          </div>
          {/* 메뉴 */}
          <div className="Menu">
            <ul className="ButtonList">

              <li>
                <Button onClick={() => this.handleChangeMode('Door') } variant="contained" color="primary">출입문 제어</Button>
              </li>
              <li>
                <Button onClick={() => this.handleChangeMode('Light')} variant="contained" color="primary">조명 제어</Button>
              </li>
              <li>
                <Button onClick={() => this.handleChangeMode('Vfan')} variant="contained" color="primary">선풍기 제어</Button>
              </li>
              <li>
                <Button onClick={() => this.handleChangeMode('Temp')} variant="contained" color="primary">실내<br/>온도 조절</Button>
              </li>
              <li>
                <Button onClick={() => this.handleChangeMode('Waterproof')} variant="contained" color="primary">실내<br/>습도 조절</Button>
              </li>
              <li>
                <Button onClick={() => { this.handleChangeMode('Fire'); this.handleFireOn('화재 발생'); if (this.state.alertting === 'ON'){ alert('화재가 발생했습니다!!'); }}} variant="contained" color="primary">화재 상황<br/>발생</Button>
              </li>
              <li>
                <Button onClick={() => {this.state.mode !== 'Setting' ? this.handleChangeMode('Setting') : this.handleChangeMode('Home')}} 
                        variant="contained" 
                        color="primary">운영자 정보
                </Button>
              </li>
              
            </ul>
          </div>

        </div>
      </Fragment>
    );
  }
  
  
  //~~ util ~~
  //화면 전환
  handleChangeView() {
  
    if (this.state.mode === 'Door') { 
      return <Door 
                  door = {this.state.door}
                  doorClose = {this.handleChangeClose}
                  doorOpen = {this.handleChangeOpen}
            />           
    }
    else if (this.state.mode === 'Light') {
      return <Light 
                  light = {this.state.light}
                  lightOn = {this.handleLightOn}
                  lightOff = {this.handleLightOff}
            /> 
    }
    else if (this.state.mode === 'Vfan') {
      return <Vfan 
                  vfan = {this.state.vfan}
                  vfanOn = {this.handleVfanOn}
                  vfanOff = {this.handleVfanOff}
            /> 
    }
    else if (this.state.mode === 'Temp') { 
      return <Temp 
                  temp = {this.state.temp}
                  changeTemp = {this.handleChangeTemp}
            /> 
    }
    else if (this.state.mode === 'Fire') {
      return <Fire 
                  fire = {this.state.fire}
                  fireOff = {this.handleFireOff}
                  vfanOff = {this.handleVfanOff}
            /> 
    }
    else if (this.state.mode === 'Waterproof') { 
      return <WaterProof 
                  waterproof = {this.state.waterproof}
                  changeWater = {this.handleChangeWater} 
            /> }
    else if (this.state.mode === 'Setting') { 
      return <Setting Off = {this.state.mode}
                      alert = {this.state.alertting} 
                      alertOn = {this.handleAlertOn}
                      alertOff = {this.handleAlertOff}
                      tempRange= {this.state.tempRange}
                      changeTempRange = {this.handleChangeTempRange}

            /> }
  };

  //출입문 OPEN/CLOSE
  handleChangeOpen = async () => {
    this.setState({ door : 'OPEN' });
    await alert('출입문이 개방되었습니다!!');
  };
  handleChangeClose = () => {
    this.setState({ door : 'CLOSE' })
  };

  //조명 ON/OFF
  handleLightOn = () => {
    this.setState({ light : 'ON' })
  };
  handleLightOff = () => {
    this.setState({ light : 'OFF' })
  };

  //선풍기 ON/OFF
  handleVfanOn = () => {
    this.setState({ vfan : 'ON' })
  };
  handleVfanOff = () => {
    this.setState({ vfan : 'OFF' })
  };

  //실내 온도 조절
  handleChangeTemp = (e) => {
    this.setState({ temp : e.target.value })
  };
  
  //화면의 전환을 위한 핸들러
  handleChangeMode = (mode) => {
    this.setState({ mode : mode });
  };

  //화재 핸들러
  handleFireOn = (e) => { 
    this.setState({ fire : '화재 발생!!' })
  }
  handleFireOff = (e) => { 
    this.setState({ fire : '화재X' })
  }

  //습도 핸들러
  handleChangeWater = (e) => {
    this.setState({ waterproof : e.target.value })
  };
  
  // 경보 잠금 해제
  handleAlertOn = () => {
    this.setState({ alertting : 'ON' })
  };
  handleAlertOff = () => {
    this.setState({ alertting : 'OFF' })
  };

  // 온도 경보 범위 설정 
  handleChangeTempRange = (e) => {
    this.setState({ tempRange : e.target.value })
  };
  //~~ util ~~
}
export default App;
