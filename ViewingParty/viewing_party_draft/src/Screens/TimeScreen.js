import React from 'react';

class TimeScreen extends React.Component {

    constructor() {
        super()
     
        this.state = {
          totalSeconds: 0
        };
    }

    

    // minutesLabel = () => { return document.getElementById("minutes") } ;
    // secondsLabel = () => { return document.getElementById("seconds") } ;
    
    setTime = () => {
      this.setState({ totalSeconds: this.state.totalSeconds+1});
    //   this.secondsLabel().innerHTML = this.state.totalSeconds % 60;
    //   this.minutesLabel().innerHTML = parseInt(this.state.totalSeconds / 60);
    }
    
    // pad = (val) => {
    //   var valString = val + "";
    //   if (valString.length < 2) {
    //     return "0" + valString;
    //   } else {
    //     return valString;
    //   }
    // }

    componentDidMount() {
        setInterval(this.setTime, 1000)
    }

    render() {

        return (
          <div>
              {/* <label id="minutes">00</label>:<label id="seconds">00</label> */}
              <h1>${this.state.totalSeconds}</h1>
          </div>
        )
    }

}

export default TimeScreen