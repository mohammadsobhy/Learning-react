export const intialState = {
	value: 0,
	toggleShow: false,
	myInput: "",
};

export const CounterReducer = (state = intialState, action) => {
	switch (action.type) {
		case "INCREMENT":
			return {
				...state,
				value: state.value + action.payload,
			};
		case "DECREMENT":
			return {
				...state,
				value: state.value - action.payload,
			};
		case "RESET":
			return {
				...state,
				value: action.payload,
			};
		case "ShowToggle":
			return {
				...state,
				toggleShow: !state.toggleShow,
			};
		case "CHANGE_INPUT":
			return {
				...state,
				myInput: action.payload,
			};

		default:
			return state;
	}
};
