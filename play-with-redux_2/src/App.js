import Button from "react-bootstrap/Button";

import "./App.css";

import { useDispatch, useSelector } from "react-redux";

function App() {
	const myCounterState = useSelector((state) => state.CounterReducer.value);
	const dispatch = useDispatch();
	return (
		<div className="parent-div ">
			<h2>My Count : {myCounterState}</h2>
			<div className="buttonsGroup">
				<Button
					variant="primary"
					onClick={() => dispatch({ type: "Increment", payload: 1 })}
				>
					INCREMENT +{" "}
				</Button>
				<Button
					variant="danger"
					onClick={() => dispatch({ type: "Reset", payload: 0 })}
				>
					RESET (0)
				</Button>
				<Button
					variant="secondary"
					onClick={() => dispatch({ type: "Decrement", payload: 2 })}
				>
					DECREMENT -
				</Button>
			</div>
		</div>
	);
}

export default App;
