import React, { Component } from "react";
import "./splash.css";
import "../../css/buttons.css";
import TranslatingTitle from "./translatingTitle.js";
import FileInput from "../shared/fileInput";

class Splash extends Component {
  //Constructor
  constructor(props) {
    super(props);

    // State
    this.state = {
      projectName: null,
      projectMedium: null,
      projectTitle: null,
      projectSaveLocation: null
    };
  }

  // Functions
  inputStateUpdate(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // Render
  render() {
    return (
      <div className="container full-height">
        <div className="row section-title">
          <TranslatingTitle value="New Project" translation="新しいプロジェクト" />
        </div>
        <div className="section">
          <div className="row">
            <div className="col-12">
              <input
                name="projectName"
                type="text"
                placeholder="Project Name"
                onChange={(e) => this.inputStateUpdate(e)} />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <input 
                name="projectMedium"
                type="text" 
                placeholder="Medium" 
                onChange={(e) => this.inputStateUpdate(e)} />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <input 
                name="projectTitle"
                type="text" 
                placeholder="Title" 
                onChange={(e) => this.inputStateUpdate(e)} />
            </div>
          </div>
          <FileInput />
          <div className="row">
            <div className="col-12">
              <button className="action-button">Create Project</button>
            </div>
          </div>
        </div>
        <div className="row section-title">
          <TranslatingTitle value="Recent Projects" translation="最近のプロジェクト" />
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