import { setToken, removeToken, getToken } from "../../utils/token";

const initialState = {
  isAuthenticated: false,
  loading: true,
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
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };

    case "LOGOUT":
      removeToken();
      return {
        ...state,
        ...payload,
        isAuthenticated: false,
        loading: false,
      };
    case "UPDATE_USER":
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    default:
      return state;
  }
};
