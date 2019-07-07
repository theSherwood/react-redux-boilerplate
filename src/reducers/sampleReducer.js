import { SAMPLE_CONSTANT } from "../actions/types";

const initialState = {
  dummy: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SAMPLE_CONSTANT:
      return {
        ...state,
        dummy: state.dummy + 1
      };
    default:
      return state;
  }
}
