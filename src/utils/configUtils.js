import { remote }  from 'electron'
import { objectsHaveSameKeys } from './validationUtils'
import fs from 'fs'

const configPath = remote.app.getPath('appData') + '\\honyaku\\config.json'
const initialState = {
  recentProjects: []
}

export const loadConfig = () => {
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
  } catch (e) {
    return initialState
  }
}

export function* updateConfig(config, value, property) {
  yield fs.writeFile(
    configPath,
    JSON.stringify({ ...config, [property]: value }),
    (err) => {
      if (err) {
        console.log('error', err)
      }
    }
  )
}
