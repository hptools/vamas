import {
  FETCH_TESTS,
  FETCH_TESTS_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  tests: {},
  isLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TESTS:
      return { ...state, isLoading: true };
    case FETCH_TESTS_SUCCESS:
      return { ...state, isLoading: false, tests: action.payload };
    default:
      return state;
  }
};
