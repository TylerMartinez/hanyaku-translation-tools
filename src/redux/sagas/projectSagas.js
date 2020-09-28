import { put, takeEvery, select } from 'redux-saga/effects'
import {
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_FAIL,
  CREATE_PROJECT_SUCCESS,
  LOAD_PROJECT_REQUEST,
  LOAD_PROJECT_SUCCESS,
  LOAD_PROJECT_FAIL,
  UPDATE_RECENT_PROJECTS_REQUEST,
  UPDATE_PROJECT_REQUEST,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAIL,
  UPDATE_WORKSPACE_SETTINGS,
  UPDATE_TRANSLATION
} from '../actionTypes'

import { saveProject, loadProject, updateProject } from '../../utils/projectUtils'
import { getProject } from '../selectors'

function* createProjectAction(action) {
  var success = false
  // Try to create the project on disk and then dispatch the outcome
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

function* updateWorkspaceSettingsAction(action) {
  // Update project
  yield put({ type: UPDATE_PROJECT_REQUEST, payload: { property: 'workspace', content: action.payload }})
}

function* updateTranslationAction(action) {
  // Get project
  var project = yield select(getProject)

  // update current translation
  var translations = project.translations
  translations[project.workspace.currentIndex] = action.payload

  // Update project
  yield put({ type: UPDATE_PROJECT_REQUEST, payload: { property: 'translations', content: translations }})
}

function* updateProjectAction(action) {
  // Try to update the project on disk and then dispatch the outcome
  try {
    // Get project
    var project = yield select(getProject)

    // Save to disk
    yield updateProject(project)

    // Success! Update State
    yield put({ type: UPDATE_PROJECT_SUCCESS, payload: action.payload.content })
  } catch (e) {
    // Failure. Share error.
    yield put({ type: UPDATE_PROJECT_FAIL, payload: e.message })
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

export function* updateWorkspaceSettingSaga() {
  yield takeEvery(UPDATE_WORKSPACE_SETTINGS, updateWorkspaceSettingsAction)
}

export function* updateTranslationSaga() {
  yield takeEvery(UPDATE_TRANSLATION, updateTranslationAction)
}

export function* updateProjectSaga() {
  yield takeEvery(UPDATE_PROJECT_REQUEST, updateProjectAction)
}

export function* loadProjectSaga() {
  yield takeEvery(LOAD_PROJECT_REQUEST, loadProjectAction)
}