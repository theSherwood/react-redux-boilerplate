import { SAMPLE_CONSTANT } from "../actions/types";

// sample action
export const sampleAction = (param1, param2) => dispatch => {
  // Do something...
  dispatch({
    type: SAMPLE_CONSTANT,
    payload: param1 + param2
  });
};
