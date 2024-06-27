import { combineReducers } from "redux";
import { counterSlice } from "./Counter";
import { toggleReducer } from "./ToggleCounter";
import { InputReducer } from "./InputReducer";

export const rootReducer = combineReducers({
	counterSlice,
	toggleReducer,
	InputReducer,
});
