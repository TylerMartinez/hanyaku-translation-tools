import {
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_FAIL,
  CREATE_PROJECT_SUCCESS,
  LOAD_PROJECT_REQUEST,
  LOAD_PROJECT_SUCCESS,
  LOAD_PROJECT_FAIL,
  UPDATE_PROJECT_REQUEST,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAIL,
  CREATE_TRANSLATION
} from '../actionTypes'
 
import updateObjectInArray from '../../utils/reduxUtils';

const initialState = {
  isLoading: null,
  error: null,
  data: null
}

const project = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT_REQUEST:
    case LOAD_PROJECT_REQUEST:
    case CREATE_TRANSLATION:
    case UPDATE_PROJECT_REQUEST: {
      return {
        isLoading: true,
        error: null,
        data: state.data
      }
    }

    case LOAD_PROJECT_SUCCESS:
    case CREATE_PROJECT_SUCCESS: {
      return {
        isLoading: false,
        error: null,
        data: action.payload
      }
    }

    case CREATE_PROJECT_FAIL:
    case UPDATE_PROJECT_FAIL:
    case LOAD_PROJECT_FAIL: {
      return {
        isLoading: false,
        error: action.payload,
        data: state.data
      }
    }

    case UPDATE_PROJECT_SUCCESS: {
      if(action.payload.property === "translations") {
        return{
          isLoading: false,
          error: null,
          data: {
            ...state.data,
            translations: updateObjectInArray(state.data.translations, action.payload)
          }
        }
      } else if(action.payload.property === "createTranslation") {
        var temp = {
          isLoading: false,
          error: null,
          data: {
            ...state.data,
            translations: [...state.data.translations, action.payload.content]
          }
        }

        temp.data.workspace.currentIndex = action.payload.index;

        return temp;
      } else {
        return {
          isLoading: false,
          error: null,
          data: {
            ...state.data,
            [action.payload.property]: action.payload.content
          }
        }
      }
    }

    default: {
      return state
    }
  }
}

export default project
