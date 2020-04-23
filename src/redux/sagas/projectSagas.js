import { put, takeEvery } from 'redux-saga/effects'
import {
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_FAIL,
  CREATE_PROJECT_SUCCESS,
  LOAD_PROJECT_REQUEST,
  LOAD_PROJECT_SUCCESS,
  LOAD_PROJECT_FAIL,
  UPDATE_RECENT_PROJECTS_REQUEST
} from '../actionTypes'

import { saveProject, loadProject } from '../../utils/projectUtils'

function* createProjectAction(action) {
  var success = false
  // Try to write the project to disk and then dispatch the outcome
  try {
    // Save to disk
    yield saveProject(action.payload)

    // Success! Update State
    yield put({ type: CREATE_PROJECT_SUCCESS, payload: action.payload.content })
    success = true
  } catch (e) {
    // Failure. Share error.
    yield put({ type: CREATE_PROJECT_FAIL, payload: e.message })
  }

  // If successful do post operations
  if (success) {
    // Add to recent projects
    yield put({ type: UPDATE_RECENT_PROJECTS_REQUEST, payload: action.payload})
  }
}

function* loadProjectAction(action) {
  // Try to load the project from disk and then dispatch the outcome
  try {
    // Load from disk
    var project = yield loadProject(action.payload)

    // Success! Update State
    yield put({ type: LOAD_PROJECT_SUCCESS, payload: project })

  } catch (e) {
    // Failure check if project is passed to remove from config
    if (e.project) {
      action.payload.remove = true

      yield put({ type: UPDATE_RECENT_PROJECTS_REQUEST, payload: action.payload})

      yield put({ type: LOAD_PROJECT_FAIL, payload: e.message })
    } else {
      // Just share message
      yield put({ type: LOAD_PROJECT_FAIL, payload: e.message })
    }
  }
}

export function* createProjectSaga() {
  yield takeEvery(CREATE_PROJECT_REQUEST, createProjectAction)
}

export function* loadProjectSaga() {
  yield takeEvery(LOAD_PROJECT_REQUEST, loadProjectAction)
}