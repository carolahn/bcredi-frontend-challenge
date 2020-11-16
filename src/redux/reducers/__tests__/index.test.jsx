import user_reducer from "../index";

describe("user reducer test", () => {
  it("should return the initial state", () => {
    expect(user_reducer(undefined, {})).toEqual({ user: { user: {} } });
  });

  it("should handle SAVE_USER_INFO", () => {
    const user_info = {
      user: {
        email: "test@test.com",
      },
    };
    expect(
      user_reducer(
        {},
        {
          type: "SAVE_USER_INFO",
          payload: {
            ...user_info,
          },
        }
      )
    ).toEqual({
      user: {
        user: {
          email: "test@test.com",
        },
      },
    });
  });
});
