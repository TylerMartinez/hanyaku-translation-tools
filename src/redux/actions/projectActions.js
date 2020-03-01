import { updateRecentProjectsAction } from "../actions/configActions"
import {
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_FAIL,
  CREATE_PROJECT_SUCCESS,
} from "../actionTypes";

import { saveProject } from "../../features/shared/projectUtils";

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
    dispatch({type: CREATE_PROJECT_FAIL, payload: e});
  }

  // If successful do post operations
  if(success) {
      // Add to recent projects
      await updateRecentProjectsAction(dispatch, content);
  }
};