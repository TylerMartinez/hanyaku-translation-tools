import {
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_FAIL,
  CREATE_PROJECT_SUCCESS,
  LOAD_PROJECT_REQUEST,
  LOAD_PROJECT_SUCCESS,
  LOAD_PROJECT_FAIL
} from "../actionTypes";

const initialState = {
  isLoading: null,
  error: null,
  data: null
};

const project = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT_REQUEST: {
      return {
        isLoading: true,
        error: null,
        data: state.data
      }
    }

    case CREATE_PROJECT_FAIL: {
      return {
        isLoading: false,
        error: action.payload,
        data: state.data
      }
    }

    case CREATE_PROJECT_SUCCESS: {
      return {
        isLoading: false,
        error: null,
        data: action.payload
      }
    }

    case LOAD_PROJECT_REQUEST: {
      return {
        isLoading: true,
        error: null,
        data: state.data
      }
    }

    case LOAD_PROJECT_FAIL: {
      return {
        isLoading: false,
        error: action.payload,
        data: state.data
      }
    }

    case LOAD_PROJECT_SUCCESS: {
      return {
        isLoading: false,
        error: null,
        data: action.payload
      }
    }

    default: {
      return state;
    }
  }
};

export default project;