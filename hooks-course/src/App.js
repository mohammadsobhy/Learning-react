import { useReducer } from "react";
import "./App.css";

const initState = {
	counter: 0,
	myInput: "",
};

const reducer = (state, action) => {
	switch (action.type) {
		case "INCREASE":
			return {
				...state,
				counter: state.counter + action.payload,
			};
		case "DECREASE":
			return {
				...state,
				counter: state.counter - action.payload,
			};
		case "RESET":
			return initState;
		case "CHANGE_MY_INPUT":
			return {
				...state,
				myInput: action.payload,
			};

		default:
			return state;
	}
};

function App() {
	const [count, dispatch] = useReducer(reducer, initState);

	const myNewInput = (e) => {
		dispatch({ type: "CHANGE_MY_INPUT", payload: e.target.value });
	};
	return (
		<div>
			<h1>HOOKS COURSE</h1>
			<div className="myDiv">
				<h2>{count.counter}</h2>
				<div>
					<button onClick={() => dispatch({ type: "INCREASE", payload: 1 })}>
						INCREASE +
					</button>
					<button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
					<button onClick={() => dispatch({ type: "DECREASE", payload: 2 })}>
						DECREASE -
					</button>
				</div>
				<h2>{count.myInput}</h2>
				<input onChange={myNewInput} value={count.myInput} />
			</div>
		</div>
	);
}

export default App;
