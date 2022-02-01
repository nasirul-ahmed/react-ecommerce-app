export const login = (payload) => {
  return {
    type: "login",
    payload: payload,
  };
};
export const logout = (payload) => {
  return {
    type: "logout",
    payload: payload,
  };
};
