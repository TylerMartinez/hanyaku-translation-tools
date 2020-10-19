import { all } from 'redux-saga/effects'
import { updateConfigSaga, updateRecentProjectsSaga } from './configSagas'
import { loadProjectSaga, createProjectSaga, updateWorkspaceSettingSaga, updateProjectSaga, updateTranslationSaga, createTranslationSaga } from './projectSagas'

export default function* rootSaga() {
  yield all([
    updateConfigSaga(),
    updateRecentProjectsSaga(),
    createProjectSaga(),
    loadProjectSaga(),
    updateProjectSaga(),
    updateWorkspaceSettingSaga(),
    updateTranslationSaga(),
    createTranslationSaga()
  ])
}