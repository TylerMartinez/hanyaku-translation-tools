import store from "../../redux/store";

const fs = require('fs');

function getProject() {
    let project = {};
    let state = store.getState();

    // Construct project from global state
    project.info = state.info;

    return project
}

export function saveProject() {
    let project = getProject();

    fs.writeFileSync(
        project.info.projectSaveLocation + "\\" + project.info.projectName + ".hon",
        JSON.stringify(project)
    )
}