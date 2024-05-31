import React from "react";
import { useReducer } from "react";

const myState = {
	myCount: 2,
	newState: 0,
};

const newReducer = (state, action) => {
	switch (action) {
		case "INCREMENTONE":
			return state + 1;
		case "DECREMENTONE":
			return state - 1;
		case "INCREMENTTWO":
			return state + 2;
		case "DECREMENTTWO":
			return state - 2;
		case "RESET":
			return myState.newState;

		default:
			return myState.newState;
	}
};

const ObjectStateReducer = () => {
	const [count, dispatchOne] = useReducer(newReducer, myState.newState);
	const [countTwo, dispatchTwo] = useReducer(newReducer, myState.myCount);
	return (
		<div>
			<h2>{count}</h2>
			<div>
				<button onClick={() => dispatchOne("INCREMENTONE")}>INCREMENT +</button>
				<button onClick={() => dispatchOne("RESET")}>RESET</button>
				<button onClick={() => dispatchOne("DECREMENTONE")}>DECREMENT -</button>
			</div>
			<h2>{countTwo}</h2>
			<div>
				<button onClick={() => dispatchTwo("INCREMENTTWO")}>
					INCREMENT + 2
				</button>
				<button onClick={() => dispatchTwo("RESET")}>RESET</button>
				<button onClick={() => dispatchTwo("DECREMENTTWO")}>
					DECREMENT - 2
				</button>
			</div>
		</div>
	);
};

export default ObjectStateReducer;
