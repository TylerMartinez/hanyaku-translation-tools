import React, { Component} from "react";
import "./app.css";
import "./bootstrap-grid.min.css";
import Splash from "./features/splash/splash.js";
import Minimize from "./images/window-minimize-regular.svg";
import Maximize from "./images/window-maximize-regular.svg";
import Close from "./images/window-close-regular.svg";

// Consts
const window = require('electron').remote.getCurrentWindow();

class App extends Component {
  // Functions
  onMaximize() {
    if(!window.isMaximized())
      window.maximize();
    else
      window.unmaximize();
  }

  // Render
  render(){
    return(
      <div className="app">
        <div className="title-bar">
          <div className="honyaku">
            Honyaku
          </div>
          <div className="title-actions">
            <button className="title-button" onClick={() => {window.minimize()}}>
              <img src={Minimize}/>
            </button>
            <button className="title-button" onClick={() => {this.onMaximize()}}>
              <img src={Maximize}/>
            </button>
            <button className="title-button" onClick={() => {window.close()}}>
              <img src={Close}/>
            </button>
          </div>
        </div>
        <div className="viewport">
          <Splash />
        </div>
      </div> 
    );
  }
}

export default App;