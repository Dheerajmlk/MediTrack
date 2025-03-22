import axios from "axios";

// Initial state
const initialState = {
  user: null,
  error: null,
};

// Action Types
const SIGN_UP = "SIGN_UP";
const LOGIN = "LOGIN";
const SET_ERROR = "SET_ERROR";
const LOGOUT = "LOGOUT";

// Reducer
const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, user: action.payload ?? null, error: null };
    case LOGIN:
      return { ...state, user: action.payload ?? null, error: null };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case LOGOUT:
      return { ...state, user: null, error: null };
    default:
      return state;
  }
};

// ✅ ADD THIS FUNCTION BELOW SIGNUP FUNCTION
export const login = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        "https://userdatabase-f1b05-default-rtdb.firebaseio.com/users.json"
      );

      if (!data) {
        dispatch({ type: "SET_ERROR", payload: "No users found" });
        return;
      }

      const users = Object.entries(data).map(([id, user]) => ({ id, ...user }));
      console.log("Users fetched from Firebase:", users); // ✅ Debugging

      const matchedUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (matchedUser) {
        dispatch({ type: "LOGIN", payload: matchedUser });
      } else {
        dispatch({ type: "SET_ERROR", payload: "Invalid email or password" });
      }
    } catch (error) {
      console.error("Login error:", error);
      dispatch({ type: "SET_ERROR", payload: "Login failed" });
    }
  };
};

export const signUp = ({ email, password }) => {
  return async (dispatch) => {
    try {
      console.log("📨 Sending signup request to Firebase...");

      const newUser = {
        email,
        password,
        medications: {},
        reminders: {},
        adherence: {},
      };

      const res = await axios.post(
        "https://userdatabase-f1b05-default-rtdb.firebaseio.com/users.json",
        newUser
      );

      console.log("✅ Firebase response:", res.data);

      dispatch({
        type: "SIGN_UP",
        payload: { id: res.data.name, ...newUser },
      });

    } catch (error) {
      console.error("❌ SIGN-UP ERROR:", error.message);
      dispatch({ type: "SET_ERROR", payload: "Sign-up failed" });
    }
  };
};

export const logout = () => ({ type: LOGOUT });

export default authReducer;
