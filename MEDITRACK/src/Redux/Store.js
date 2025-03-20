import { legacy_createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk"; // ✅ Correct way to import thunk
import authReducer from "./Auth";

const store = legacy_createStore(authReducer, applyMiddleware(thunk));

export default store;
