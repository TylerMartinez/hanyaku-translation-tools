import store from "../../redux/store";

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