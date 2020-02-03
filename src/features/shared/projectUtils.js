const fs = require('fs');

function getProject() {
    let project = {};

    // Construct project from global state

    return project
}

export function saveProject() {
    let project = getProject();

    fs.writeFileSync(
        project.info.projectSaveLocation,
        JSON.stringify(project)
    )
}