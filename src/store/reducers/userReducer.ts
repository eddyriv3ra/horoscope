import {
  FETCH_USER_ERROR,
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
  PENDING,
} from '../constants';

const initialState = {
  userData: {},
  status: PENDING,
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_USER_PENDING:
      return { ...state, userData: {}, status: action.status };
    case FETCH_USER_SUCCESS:
      return { ...state, userData: action.data, status: action.status };
    case FETCH_USER_ERROR:
      return { ...state, userData: {}, status: action.status };
    default:
      return state;
  }
};
