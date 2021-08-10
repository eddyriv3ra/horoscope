import {
  FETCH_USER_ERROR,
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
  PENDING,
  SET_FORM_DATA,
  SET_GENDER,
  FETCH_HOROSCOPE_PENDING,
  FETCH_HOROSCOPE_SUCCESS,
  FETCH_HOROSCOPE_ERROR,
} from '../constants';

const initialState = {
  userData: {},
  status: PENDING,
  gender: '',
  name: '',
  email: '',
  birthdate: '',
  horoscope: {},
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_USER_PENDING:
      return { ...state, userData: {}, status: action.status };
    case FETCH_USER_SUCCESS:
      return { ...state, userData: action.data, status: action.status };
    case FETCH_USER_ERROR:
      return { ...state, userData: {}, status: action.status };
    case SET_GENDER:
      return { ...state, gender: action.payload };
    case SET_FORM_DATA:
      return {
        ...state,
        [action.target]: action.value,
      };
    case FETCH_HOROSCOPE_PENDING:
      return { ...state, horoscope: {} };
    case FETCH_HOROSCOPE_SUCCESS:
      return { ...state, horoscope: action.data };
    case FETCH_HOROSCOPE_ERROR:
      return { ...state, horoscope: {} };

    default:
      return state;
  }
};
