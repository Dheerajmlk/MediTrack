import axios from "axios";

const firebaseURL = "https://userdatabase-f1b05-default-rtdb.firebaseio.com/users.json";

// Initial State
const initialState = {
  user: null,
  error: null,
};

// Action Types
const SIGN_UP = "SIGN_UP";
const LOGIN = "LOGIN";
const SET_ERROR = "SET_ERROR";
const LOGOUT = "LOGOUT";

// Reducer Function
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, user: action.payload, error: null };
    case LOGIN:
      return { ...state, user: action.payload, error: null };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case LOGOUT:
      return { ...state, user: null, error: null };
    default:
      return state;
  }
};

// Action Creators
export const signUp = (user) => {
  return (dispatch) => {
    axios
      .post(firebaseURL, user)
      .then(() => dispatch({ type: SIGN_UP, payload: user }))
      .catch(() => dispatch({ type: SET_ERROR, payload: "Sign-up failed" }));
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(firebaseURL);
      const users = Object.values(data || {});
      const matchedUser = users.find((user) => user.email === email && user.password === password);

      if (matchedUser) {
        dispatch({ type: LOGIN, payload: matchedUser });
      } else {
        dispatch({ type: SET_ERROR, payload: "Invalid email or password" });
      }
    } catch {
      dispatch({ type: SET_ERROR, payload: "Login failed" });
    }
  };
};

export const logout = () => ({ type: LOGOUT });

export default authReducer;
