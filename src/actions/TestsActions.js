import {
  FETCH_TESTS,
  FETCH_TESTS_SUCCESS
} from './types';


export const fetchTests = () => (dispatch) => {
  dispatch({ type: FETCH_TESTS });
  dispatch({ type: FETCH_TESTS_SUCCESS, payload: {} });
};
