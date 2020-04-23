import { updateConfig } from '../../utils/configUtils'
import { getRecentProjects, getConfig } from '../selectors'
import { select, put, takeLatest, takeEvery } from 'redux-saga/effects'
import {
  UPDATE_RECENT_PROJECTS_REQUEST,
  UPDATE_CONFIG_REQUEST,
  UPDATE_CONFIG_SUCCESS,
  UPDATE_CONFIG_FAIL
} from '../actionTypes'

function* updateRecentProjectsAction(action) {
  // Get recentProject copy from state
  var recentProjects = yield select(getRecentProjects)

  // Update recent Projects removing the new content to be added to front or removed
  recentProjects = recentProjects.filter(x => x.projectSaveLocation !== action.payload.projectSaveLocation ||
                                              x.projectName !== action.payload.projectName)

  // If remove is defined lets not push
  if (!action.payload.remove) { recentProjects.push(action.payload) }

  // Update config
  yield put({ type: UPDATE_CONFIG_REQUEST, payload: { property: 'recentProjects', content: recentProjects }})
}

function* updateConfigAction(action) {
  // Try to write the project to disk and then dispatch the outcome
  try {
    // Get config
    var config = yield select(getConfig)

    // Save to disk
    yield updateConfig(config, action.payload.content, action.payload.property)

    // Success! Update State
    yield put({ type: UPDATE_CONFIG_SUCCESS, payload: action.payload.content })
  } catch (e) {
    // Failure. Share error.
    yield put({ type: UPDATE_CONFIG_FAIL, payload: e })
  }
}

export function * updateRecentProjectsSaga () {
  yield takeLatest(UPDATE_RECENT_PROJECTS_REQUEST, updateRecentProjectsAction)
}

export function * updateConfigSaga () {
  yield takeEvery(UPDATE_CONFIG_REQUEST, updateConfigAction)
}