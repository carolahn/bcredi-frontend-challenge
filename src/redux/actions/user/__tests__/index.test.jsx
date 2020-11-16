import * as actions from "../index";

describe("actions test", () => {
  it("should return action to save user info", () => {
    const user = {};
    const expectedAction = {
      type: "SAVE_USER_INFO",
      payload: {
        user,
      },
    };

    expect(actions.saveUserInfo(user)).toEqual(expectedAction);
  });
});
