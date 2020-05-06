import { combineReducers } from 'redux'

import project from './project';
import config from './config'

export default combineReducers({ project, config })
