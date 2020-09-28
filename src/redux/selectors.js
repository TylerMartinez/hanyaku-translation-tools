export const getRecentProjects = (state) => {
  var recentProjects = []
  
  state.config.data.recentProjects.forEach(x => {
    recentProjects.push({ ...x })
  })

  return recentProjects;
}

export const getConfig = (state) => {
  return state.config.data;
}

export const getProject = (state) => {
  return state.project.data;
}