import React, { Component } from "react";
const { dialog } = require('electron').remote;
import "../../css/buttons.css";

class FileInput extends Component {
    // Functions
    onSelect() {
        let fileDestination = dialog.showOpenDialogSync({
            title: this.props.fileTitle
        })

        if (fileDestination){
            this.props.saveToState(fileDestination);
        }
    }

    // Render
    render() {
        return (
            <div className="row">
                <div className="col-10">
                    <input 
                        placeholder= "Save Location"
                        disabled/>
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