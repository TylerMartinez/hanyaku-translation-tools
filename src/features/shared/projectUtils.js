import store from "../../redux/store";
import { existsSync } from "fs";

const fs = require('fs');

export async function saveProject(content) {
    await fs.writeFile(
        content.projectSaveLocation + "\\" + content.projectName + ".hon",
        JSON.stringify(content),
        (err, result) => {
            if (err) console.log('error', err);
        }
    );
}

export function loadProject(project) {
    var filePath = project.projectSaveLocation + "\\" + project.projectName + ".hon";
    var exists = fs.existsSync(filePath);

    // Throw error if file does not exist
    if (!exists)
        throw { project: project, message: "Project does not exist!" }

    var project = fs.readFileSync(filePath);

    return JSON.parse(project);
}