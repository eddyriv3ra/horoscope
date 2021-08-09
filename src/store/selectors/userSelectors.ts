type userStatusType = 'PENDING' | 'SUCCESS' | 'ERROR';

export const getUserImg = (state: any): string =>
  state?.user?.userData?.picture?.large;

export const getUserStatus = (state: any): userStatusType =>
  state?.user?.status;

export const getGender = (state: any): string => state?.user?.gender;
