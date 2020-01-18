import React, { Component} from "react";
import "./splash.css";

class Splash extends Component{
  render(){
    return(
      <div className="splash">
        <div className="honyaku">
          Honyaku: Translation Tools!
        </div>
        <div>
          Recent Projects:
        </div>
        <div>
          New Project
        </div>
      </div>
    );
  }
}

export default Splash;