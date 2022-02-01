const initialState = {
  profile: {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  }
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case "login":
      return {
          ...state,
          profile: action.payload
      }

    case "logout":
      return (state) => (state = false);
    default:
      break;
  }
};
