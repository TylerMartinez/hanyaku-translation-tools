import { updateRecentProjectsAction } from "../actions/configActions"
import {
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_FAIL,
  CREATE_PROJECT_SUCCESS,
  LOAD_PROJECT_REQUEST,
  LOAD_PROJECT_SUCCESS,
  LOAD_PROJECT_FAIL
} from "../actionTypes";

import { saveProject, loadProject } from "../../features/shared/projectUtils";

export const createProjectAction = async (dispatch, content) => {
  var success = false;

  // Start Project Creation
  dispatch({type: CREATE_PROJECT_REQUEST});

  // Try to write the project to disk and then dispatch the outcome
  try {
    // Save to disk
    await saveProject(content);

    // Success! Update State
    dispatch({type: CREATE_PROJECT_SUCCESS, payload: content});
    success = true;
    
  } catch(e) {
    // Failure. Share error.
    dispatch({type: CREATE_PROJECT_FAIL, payload: e.message});
  }

  // If successful do post operations
  if(success) {
      // Add to recent projects
      await updateRecentProjectsAction(dispatch, content);
  }
};

export const loadProjectAction = async (dispatch, content) => {
  // Start Project Load
  dispatch({type: LOAD_PROJECT_REQUEST});

  // Try to load the project from disk and then dispatch the outcome
  try {
    // Load from disk
    var project = await loadProject(content);

    // Success! Update State
    dispatch({type: LOAD_PROJECT_SUCCESS, payload: project});
    
  } catch(e) {
    // Failure check if project is passed to remove from config
    if(e.project){
      await updateRecentProjectsAction(dispatch, content,  true);
      dispatch({type: LOAD_PROJECT_FAIL, payload: e.message});
    } else{
      // Just share message
      dispatch({type: LOAD_PROJECT_FAIL, payload: e.message});
    }
  }
};