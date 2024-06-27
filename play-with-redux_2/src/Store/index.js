// import { combineReducers, legacy_createStore as createStore } from "redux";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "./Features/CounterSlice";

const ReducersRoot = combineReducers({
	CounterSlice,
});
export const store = configureStore({
	reducer: {
		ReducersRoot,
	},
});
