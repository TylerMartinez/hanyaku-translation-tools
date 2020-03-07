const { app } = require('electron').remote
const { objectsHaveSameKeys } = require('./validationUtils')
const fs = require('fs')

const configPath = app.getPath('appData') + '\\honyaku\\config.json'
const initialState = {
  recentProjects: []
}

export function loadConfig () {
  // Check if config exists and if not create it
  if (!fs.existsSync(configPath)) {
    fs.writeFileSync(configPath, JSON.stringify(initialState))
  }

  try {
    // Read in config file
    var config = JSON.parse(fs.readFileSync(configPath))

    // Check to see if config is in proper state otherwise default to intial
    if (!objectsHaveSameKeys(config, initialState)) {
      config = initialState
    }

    return config
  } catch {
    return initialState
  }
};

export function updateConfig (value, property) {
  fs.writeFile(
    configPath,
    JSON.stringify({ ...loadConfig(), [property]: value }),
    (err, result) => {
      if (err) console.log('error', err)
    }
  )
};
