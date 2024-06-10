import { combineReducers } from "redux";
import { counterReducer } from "./Counter";
import { toggleReducer } from "./ToggleCounter";
import { InputReducer } from "./InputReducer";

export const rootReducer = combineReducers({
	counterReducer,
	toggleReducer,
	InputReducer,
});
