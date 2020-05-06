import { all } from 'redux-saga/effects'
import { updateConfigSaga, updateRecentProjectsSaga } from './configSagas'
import { loadProjectSaga, createProjectSaga } from './projectSagas'

export default function* rootSaga() {
  yield all([
    updateConfigSaga(),
    updateRecentProjectsSaga(),
    createProjectSaga(),
    loadProjectSaga()
  ])
}