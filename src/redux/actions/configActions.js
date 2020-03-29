import store from '../store'
import { updateConfig } from '../../utils/configUtils'
import {
  UPDATE_CONFIG_REQUEST,
  UPDATE_CONFIG_SUCCESS,
  UPDATE_CONFIG_FAIL
} from '../actionTypes'

export const updateRecentProjectsAction = async (dispatch, content, remove) => {
  // Get recentProject copy from state
  var recentProjects = []
  store.getState().config.data.recentProjects.forEach(x => {
    recentProjects.push({ ...x })
  })

  // Update recent Projects removing the new content to be added to front or removed
  recentProjects = recentProjects.filter(x => x.projectSaveLocation !== content.projectSaveLocation ||
                                              x.projectName !== content.projectName)

  // If remove is defined lets not push
  if (!remove) { recentProjects.push(content) }

  // Update config
  updateConfigAction(dispatch, recentProjects, 'recentProjects')
}

export const updateConfigAction = async (dispatch, content, property) => {
  // Start Config Update
  dispatch({ type: UPDATE_CONFIG_REQUEST })

  // Try to write the project to disk and then dispatch the outcome
  try {
    // Save to disk
    await updateConfig(content, property)

    // Success! Update State
    dispatch({ type: UPDATE_CONFIG_SUCCESS, payload: content })
  } catch (e) {
    // Failure. Share error.
    dispatch({ type: UPDATE_CONFIG_FAIL, payload: e })
  }
}
