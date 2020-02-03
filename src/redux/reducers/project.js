import { CREATE_PROJECT } from "../actionTypes";

const initialState = {};

const info = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default info;