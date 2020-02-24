const { app } = require('electron').remote;
const { objectsHaveSameKeys } = require('./validationUtils')
const fs = require('fs');

const configPath = app.getPath('appData') + 'config.json';
const initialState = {
    recentProjects: []
};

export function loadConfig() {
    // Check if config exists and if not create it
    if(!fs.existsSync(configPath)){
        fs.writeFileSync(configPath, JSON.stringify(initialState));
    }

    // Read in config file
    var config = fs.readFileSync(configPath);

    return JSON.parse(config);
};

export function updateConfig(config) {
    // Check to make sure confing object matches
    if(objectsHaveSameKeys()){
        fs.writeFileSync(configPath, JSON.stringify(config));
    } else {
        console.error("Attempt to update config failed due to object signature!")
    }
};