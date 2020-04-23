import { loadConfig } from '../../utils/configUtils.js'
import {
  UPDATE_CONFIG_REQUEST,
  UPDATE_CONFIG_SUCCESS,
  UPDATE_CONFIG_FAIL
} from '../actionTypes'

const initialState = {
  isLoading: null,
  error: null,
  data: loadConfig()
}

const config = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CONFIG_REQUEST: {
      return {
        isLoading: true,
        error: null,
        data: state.data
      }
    }

    case UPDATE_CONFIG_SUCCESS: {
      return {
        isLoading: false,
        error: null,
        data: {
          ...state.data,
          recentProjects: [...action.payload]
        }
      }
    }

    case UPDATE_CONFIG_FAIL: {
      return {
        isLoading: false,
        error: action.payload.error,
        data: state.data
      }
    }

    default: {
      return state
    }
  }
}

export default config
