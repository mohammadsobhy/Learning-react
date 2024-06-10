import "./App.css";

import Button from "react-bootstrap/Button";

import { useReducer } from "react";

const intialState = {
	value: 0,
	myInput: "",
	toggleData: true,
};

const myReducer = (state = intialState, action) => {
	switch (action.type) {
		case "INCREMENT":
			return {
				...state,
				value: state.value + action.payload,
			};

		case "RESET":
			return {
				...state,
				value: action.payload,
			};

		case "DECREMENT":
			return {
				...state,
				value: state.value - action.payload,
			};
		case "changeInput":
			return {
				...state,
				myInput: action.payload,
			};
		case "toggleCounter":
			return {
				...state,
				toggleData: !state.toggleData,
			};

		default:
			return state;
	}
};

function App() {
	const [count, dispatch] = useReducer(myReducer, intialState);
	const changeInputFn = (e) => {
		dispatch({
			type: "changeInput",
			payload: e.target.value,
		});
	};
	const toggleDataFn = () => {
		dispatch({
			type: "toggleCounter",
		});
	};
	return (
		<div className="container d-flex flex-column gap-4 align-items-center justify-content-center min-vh-100">
			<h1>Hello World !!!</h1>

			{count.toggleData = !count.toggleData ? : "There is no counter value"}

			<Button variant="danger" onClick={() => dispatch(toggleDataFn)}>
				SHOW / HIDE COUNTER
			</Button>
			<div>
				<h2>{count.myInput}</h2>
				<input value={count.myInput} onChange={changeInputFn} />
			</div>
		</div>
	);
}

export default App;
