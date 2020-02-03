import { CREATE_PROJECT } from "./actionTypes";

let nextTodoId = 0;

export const createProject = (content) => ({
  type: CREATE_PROJECT,
  payload: {
    ...content
  }
});