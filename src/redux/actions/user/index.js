export const SAVE_USER_INFO = "SAVE_USER_INFO";

export const saveUserInfo = (user) => ({
  type: SAVE_USER_INFO,
  payload: {
    user,
  },
});
