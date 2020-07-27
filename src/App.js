import React from 'react';
import './App.css';
import Duration from './components/Duration.component';
import CustomButton from './components/CustomButton.component';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      defaultTime: 10,
      breakTime: 300
    };

    this.pomodoroStarted = false;
    this.isPaused = false;
    this.breakStarted = false;
    this.url = "https://goo.gl/65cBl1";
    this.audio = new Audio(this.url);
  }

  componentDidUpdate(){
    if(this.state.defaultTime === 0) {
      this.stopTimer(this.timer)
    }
    // this.startBreak();

  }
  calculateTime = (time) => {
    return `${Math.floor(time/60)} : ${time % 60 > 9 ? '' + time%60 : '0' + time%60}`
  }

  handleStart = () => {
    if(!this.pomodoroStarted){
      this.timer = setInterval(() => {
        this.setState({
          defaultTime: this.state.defaultTime - 1})
      }, 1000)
      console.log(this.timer);
      this.pomodoroStarted = !this.pomodoroStarted
    }
  }

   stopTimer = (timer) => {
     clearInterval(timer)
     timer = null
   }
  handlePause = () => {
    console.log('Chay ma.')
    console.log(this.isPaused);
    
    if(this.pomodoroStarted){
      this.isPaused = true;
      this.setState(this.state);
      console.log(this.isPaused)
      this.stopTimer(this.timer)
    }
  }

  handleResume = () => {
    if(this.pomodoroStarted) {
      this.isPaused = false;
      this.setState(this.state);

      if(!this.breakStarted) {
        this.timer = setInterval(() => {
          this.setState({
            defaultTime: this.state.defaultTime - 1})
        }, 1000)
      }

      if(!this.breakStarted) {
        this.breakTimer = setInterval(() => {
          this.setState({
            breakTime: this.state.breakTime - 1})
        }, 1000)
      }      
    }
  }
  handleReset = () => {
    console.log('Hello');
    this.setState({
      defaultTime: 1500,
      breakTime: 300
    });
    console.log(this.state)
    this.pomodoroStarted = false;
    this.isPaused = false;
    
  }

  increaseTime = () => {
    this.setState({
      defaultTime: this.state.defaultTime + 60
    })
  }

  decreaseTime = () => {
    this.setState({
      defaultTime: this.state.defaultTime - 60
    })

    if(this.state.defaultTime <= 60){
      this.setState({
        defaultTime: 60
      })
    }
  }

  increaseBreakTime = () => {
    this.setState({
      breakTime: this.state.breakTime + 60
    })
  }

  decreaseBreakTime = () => {
    this.setState({
      breakTime: this.state.breakTime - 60
    })

    if(this.state.breakTime <= 60){
      this.setState({
        breakTime: 60
      })
    }
  }

  startBreak = () => {
    this.breakTimer = this.breakTimer = setInterval(() => {
      this.setState({
        breakTime: this.state.breakTime - 1})
    }, 1000)
  }

  render() {
    if(this.state.defaultTime === 0) {
      this.audio.play();
    }
    return (
      <div className="App container text-center">
        <h1> Pomodoro Clock</h1>
        <Duration 
          defaultTime={this.calculateTime(this.state.defaultTime)}
          breakTime={this.calculateTime(this.state.breakTime)}
          increaseTime = {this.increaseTime}
          decreaseTime = {this.decreaseTime}
          increaseBreakTime ={this.increaseBreakTime}
          decreaseBreakTime = {this.decreaseBreakTime}
          />
        <CustomButton
          handleStart={this.handleStart}
          condition = {this.isPaused ? 'Resume' : 'Pause'}
          pausedBtn = {this.isPaused ? this.handleResume : this.handlePause}
          handleReset = {this.handleReset}
         />
      </div>
    );
  }
  
}

export default App;
