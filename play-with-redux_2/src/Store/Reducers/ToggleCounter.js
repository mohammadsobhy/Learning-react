import { IntialState } from "./IntialState";

export const toggleReducer = (state = IntialState, action) => {
	switch (action.type) {
		case "SHOW":
			return {
				...state,
				toggleCounter: !state.toggleCounter,
			};

		default:
			return state;
	}
};
