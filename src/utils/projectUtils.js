import fs from 'fs'

export function* saveProject(content) {
  yield fs.writeFile(
    content.projectSaveLocation + '\\' + content.projectName + '.hon',
    JSON.stringify(content),
    (err) => {
      if (err) console.log('error', err)
    }
  )
}

export const loadProject = (project) => {
  var filePath = project.projectSaveLocation + '\\' + project.projectName + '.hon'
  var exists = fs.existsSync(filePath)

  // Throw error if file does not exist
  if (!exists) {
    var error = {
      project: project,
      message: 'Project does not exist!'
    }
    throw error
  }

  var result = fs.readFileSync(filePath)

  return JSON.parse(result)
}
