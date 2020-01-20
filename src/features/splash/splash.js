import React, { Component} from "react";
import "./splash.css";
import TranslatingTitle from "./translatingTitle.js";

class Splash extends Component{
  render(){
    return(
      <div className="container full-height">
        <div className="row">
          <TranslatingTitle value="New Project" translation="新しいプロジェクト"/>
        </div>
        <div className="section">
          <div className="row">
            <input type="text" placeholder="Project Name"/>
          </div>
          <div className="row">
            <input type="text" placeholder="Medium"/>
          </div>
          <div className="row">
            <input type="text" placeholder="Title"/>
          </div>
        </div>
        <div className="row section-title">
          <TranslatingTitle value="Recent Projects" translation="最近のプロジェクト"/>
        </div>
        <div className="section remaining-section">
          <div className="row section-content">
            No recent projects . . .
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;