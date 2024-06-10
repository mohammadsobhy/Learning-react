import { IntialState } from "./IntialState";

export const InputReducer = (state = IntialState, action) => {
	switch (action.type) {
		case "CHANGE_INPUT_VALUE":
			return {
				...state,
				myInput: action.payload,
			};

		default:
			return state;
	}
};
