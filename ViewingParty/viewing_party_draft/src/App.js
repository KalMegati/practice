// import logo from './logo.svg';
import React from 'react'
import NetflixScreen from './Screens/NetflixScreen.js'
import TwitchScreen from './Screens/TwitchScreen.js'
import TimeScreen from './Screens/TimeScreen.js'
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        
        <NetflixScreen />
        <TwitchScreen />
        <TimeScreen />
  
        {/* <div>
          <iframe src="https://www.netflix.com/browse"></iframe>
        </div>
  
        <div>
          <iframe src="https://2e.aonprd.com/"></iframe>
        </div> */}
  
      </div>
    );
  
  }

}

export default App;
