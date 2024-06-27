import { createSlice } from "@reduxjs/toolkit";
import { myIntialState } from "../index";
export myIntialState = {
	value: 0,
};
export const CounterSlice = createSlice({
	name: "counter",
	initialState: myIntialState,
	reducers: {
		Increment: (state, action) => {
			state.value += action.payload;
		},
		Reset: (state, action) => {
			state.value += action.payload;
		},
		Decrement: (state, action) => {
			state.value += action.payload;
		},
	},
});

export const { Increment, Decrement, Reset } = CounterSlice.actions;
export default CounterSlice.reducer;
