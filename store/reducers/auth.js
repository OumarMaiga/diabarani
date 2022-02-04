import { setToken, removeToken, getToken } from "../../utils/token";

const initialState = {
  isAuthenticated: false,
  loading: true,
  user: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "RETRIEVE_TOKEN":
      getToken(payload.token)
      return {
        ...state,
        isAuthenticated: true,
        loading: false
      }
    case "LOGIN":
      setToken(payload.token);
      //   console.log("Payload", payload); // zim1@gmail.com
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };

    case "LOGOUT":
      removeToken();
    //   console.log(isAuthenticated)
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
      };

    default:
      return state;
  }
};
