import { createSlice } from "@reduxjs/toolkit";
import { IntialState } from "./IntialState";

export const counterSlice = createSlice({
	name: "counter",
	initialState: IntialState,
	reducers: {
		INCREMENT: (state, action) => {
			state.counter += action.payload;
		},
		RESET: (state, action) => {
			state.counter = action.payload;
		},
		DECREMENT: (state, action) => {
			state.counter += action.payload;
		},
	},
});

export const { INCREMENT, RESET, DECREMENT } = counterSlice.actions;
export default counterSlice;
