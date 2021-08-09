/* eslint-disable operator-linebreak */

/* eslint-disable indent */
import {
  ERROR,
  FETCH_USER_ERROR,
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
  PENDING,
  SET_GENDER,
  SUCCESS,
} from '../constants';

export const fetchUserPending = (): any => ({
  type: FETCH_USER_PENDING,
  status: PENDING,
});

export const fetchUserSuccess = (data: any): any => ({
  type: FETCH_USER_SUCCESS,
  data,
  status: SUCCESS,
});

export const fetchUserError = (): any => ({
  type: FETCH_USER_ERROR,
  status: ERROR,
});

export const setGender = (payload: any): any => ({
  type: SET_GENDER,
  payload,
});

export const fetchUser =
  () =>
  async (dispatch: any): Promise<void> => {
    try {
      dispatch(fetchUserPending());
      const data = await (await fetch('https://randomuser.me/api/')).json();
      dispatch(fetchUserSuccess(data?.results[0]));
    } catch (error) {
      dispatch(fetchUserError());
    }
  };
