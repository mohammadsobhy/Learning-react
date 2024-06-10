import { IntialState } from "./IntialState";

export const counterReducer = (state = IntialState, action) => {
	switch (action.type) {
		case "INCREMENT":
			return {
				...state,
				counter: state.counter + action.payload,
			};
		case "RESET":
			return {
				...state,
				counter: action.payload,
			};
		case "DECREMENT":
			return {
				...state,
				counter: state.counter - action.payload,
			};

		default:
			return state;
	}
};
