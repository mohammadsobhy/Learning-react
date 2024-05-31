import { useReducer } from "react";

//1 - initialize the state
const initalState = 0;

//create the reducer taking two params the state and action you want dispatch it on the click event
const reducer = (state, action) => {
	switch (action) {
		case "INCREMENT":
			return state + 1;
		case "DECREMENT":
			return state - 1;
		case "RESET":
			return initalState;
		default:
			return state;
	}
};

const BasicReducer = () => {
	//2 - use the hook useReducer with import it
	// count = initalState
	// the dispatch = reducer
	//  dispatch the actions types on the click event
	const [count, dispatch] = useReducer(reducer, initalState);
	return (
		<div>
			<h2>{count}</h2>
			<div>
				<button onClick={() => dispatch("INCREMENT")}>INCREMENT +</button>
				<button onClick={() => dispatch("RESET")}>RESET</button>
				<button onClick={() => dispatch("DECREMENT")}>DECREMENT -</button>
			</div>
		</div>
	);
};

export default BasicReducer;
