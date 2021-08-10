type userStatusType = 'PENDING' | 'SUCCESS' | 'ERROR';

export const getUserImg = (state: any): string =>
  state?.user?.userData?.picture?.large;

export const getUserStatus = (state: any): userStatusType =>
  state?.user?.status;

export const getGender = (state: any): string => state?.user?.gender;

export const getName = (state: any): string => state?.user?.name;

export const getEmail = (state: any): string => state?.user?.email;

export const getBirthDate = (state: any): string => state?.user?.birthdate;

export const getHoroscope = (state: any): any => state?.user?.horoscope;
