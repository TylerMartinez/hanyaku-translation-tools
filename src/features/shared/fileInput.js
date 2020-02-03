import React, { Component } from "react";
const { dialog } = require('electron').remote;
import "../../css/buttons.css";

class FileInput extends Component {
    //Constructor
    constructor(props) {
        super(props);

        // State
        this.state = {
            selectedFile: ""
        };
    }

    // Functions
    onSelect() {
        let fileDestination = dialog.showOpenDialogSync({
            title: this.props.fileTitle,
            properties: ['openDirectory']
        })

        if (fileDestination) {
            this.setState({
                selectedFile: fileDestination[0]
            });

            this.props.saveToState(this.props.name, fileDestination[0]);
        }
    }

    // Render
    render() {
        return (
            <div className="row">
                <div className="col-10">
                    <input
                        name={this.props.name}
                        value={this.state.selectedFile}
                        placeholder="Save Location"
                        disabled />
                </div>
                <div className="col-2">
                    <button
                        className="action-button"
                        onClick={() => this.onSelect()}>
                        Select...
                    </button>
                </div>
            </div>
        );
    }
}

export default FileInput;