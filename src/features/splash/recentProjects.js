import React, { Component } from "react";
import { connect } from "react-redux";
import "./recentProjects.css";
import { loadProjectAction } from "../../redux/actions/projectActions";

class RecentProjects extends Component {
  //Constructor
  constructor(props) {
    super(props);

    // State
    this.state = {
    };
  }

  // Functions
  getListRender() {
    if (this.props.recentProjects && this.props.recentProjects.length) {
      return this.props.recentProjects.map((project, i) =>
        <div key={i} className="full-width project-item" onClick={() => this.props.loadProject(project)}>
          <div className="project-title">{project.projectName}</div>
          <div className="project-info">
            Medium: {project.projectMedium}
          </div>
          <div className="project-info">
            Title: {project.projectTitle}
          </div>
          <div className="project-save-location">{project.projectSaveLocation}</div>
        </div>
      ).reverse();
    } else {
      return "No recent projects!";
    }
  }

  // Render
  render() {
    const projectList = this.getListRender();

    return (
      <div className="full-width full-height">
        <div className="full-width full-height-action">
          {projectList}
        </div>
        <div>
          <button
            onClick={() => { }}
            className="action-button">
            Load Project
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recentProjects: state.config.data.recentProjects,
    error: state.config.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadProject: project => loadProjectAction(dispatch, project)
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentProjects);